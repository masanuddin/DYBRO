import mqtt, { MqttClient } from "mqtt";

// --- 1. POLYFILLS (Wajib untuk React Native) ---
global.Buffer = require("buffer").Buffer;
global.process = require("process");

// --- 2. KONFIGURASI DARI DYBRO.INO ---
// Note: Arduino pakai port 1883 (TCP), tapi App MofuSand HARUS pakai 8000 (WebSocket)
const BROKER_URL = "ws://broker.hivemq.com:8000/mqtt";

// Daftar Topik sesuai DYBRO.ino
const TOPICS = {
  DHT: "sic/dibimbing/DoaIbuMenyertai/dht", // Data: { temperature, humidity }
  FOCUS: "sic/dibimbing/DoaIbuMenyertai/ir", // Data: { isFokus, noise }
  CAM: "sic/dibimbing/DoaIbuMenyertai/cam",
  STATE: "sic/dibimbing/DoaIbuMenyertai/button", // Data: { state, timeRemaining_s }
  // Topik untuk mengirim perintah ke alat (opsional)
  ACTUATOR: "sic/dibimbing/DoaIbuMenyertai/actuator",
};

// Opsi Koneksi
const options = {
  clientId: "mofusand_app_" + Math.random().toString(16).substr(2, 8),
  keepalive: 60,
  clean: true,
  reconnectPeriod: 2000,
};

// --- 3. FUNGSI CONNECT ---
export const connectToMQTT = (
  onMessageReceived: (topic: string, parsedData: any) => void
): MqttClient => {
  console.log("🔄 Menghubungkan ke HiveMQ via WebSocket...");

  const client = mqtt.connect(BROKER_URL, options);

  client.on("connect", () => {
    console.log("✅ Terhubung ke MQTT Broker!");

    // Subscribe ke semua topik data
    const topicsToSubscribe = [TOPICS.DHT, TOPICS.FOCUS, TOPICS.CAM, TOPICS.STATE];

    client.subscribe(topicsToSubscribe, (err) => {
      if (!err) {
        console.log("📡 Berlangganan ke topik DYBRO:", topicsToSubscribe);
      } else {
        console.error("❌ Gagal Subscribe:", err);
      }
    });
  });

  client.on("message", (topic, message) => {
    const msgString = message.toString();
    console.log("📥 RAW MQTT:", topic, message.toString());
    // console.log(`📩 [${topic}]: ${msgString}`);

    try {
      // Coba parse JSON dari Arduino
      const data = JSON.parse(msgString);
      onMessageReceived(topic, data);
    } catch (e) {
      console.warn("⚠️ Data bukan JSON valid:", msgString);
    }
  });

  client.on("error", (err) => {
    console.error("❌ MQTT Error:", err);
  });

  return client;
};

// Export daftar topik agar bisa dipakai di halaman lain untuk pengecekan
export const MQTT_TOPICS = TOPICS;
