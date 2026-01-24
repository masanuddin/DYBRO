import home from "@/assets/icons/home.png";
import profile from "@/assets/icons/profile.png";
import chart from "@/assets/icons/chart.png";
import akuila from "@/assets/icons/akuila-logo.png";
import akuilaSenang from "@/assets/icons/akuila-senang.png";
import akuilaSedih from "@/assets/icons/akuila-sedih.png";
import akuilaMarah from "@/assets/icons/akuila-marah.png";
import { QuestionsOnBoarding } from "@/types/type";
import { StatusConfigItem, FocusStatus } from "@/types/type";

export const icons = {
    home,
    profile,
    chart,
    akuila,
    akuilaSenang,
    akuilaSedih,
    akuilaMarah,
};

export const questionsOB: QuestionsOnBoarding[] = [
    {
        id: 1,
        icon: "",
        question: "What's your child's name?",
        type: "text",
    },
    {
        id: 2,
        icon: "",
        question: "How old is your child?",
        type: "choice",
        options: ["5-7 years", "8-10 years", "11-13 years", "14+ years"],
    },
    {
        id: 3,
        icon: "",
        question: "What's your focus goal?",
        type: "choice",
        options: ["Homework help", "Study sessions", "General focus", "Screen time"],
    },
];

export const STATUS_CONFIG: Record<FocusStatus, StatusConfigItem> = {
    focused: {
        label: "Focused",
        badgeBg: "bg-green-100",
        badgeText: "text-green-600",
        icon: icons.akuilaSenang,
    },
    distracted: {
        label: "Distracted",
        badgeBg: "bg-yellow-100",
        badgeText: "text-yellow-600",
        icon: icons.akuilaSedih,
    },
    away: {
        label: "Away",
        badgeBg: "bg-red-100",
        badgeText: "text-red-600",
        icon: icons.akuilaMarah,
    },
};
