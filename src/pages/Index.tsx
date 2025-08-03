import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [selectedPeriod, setSelectedPeriod] = useState("month");
  const [selectedRegion, setSelectedRegion] = useState("all");

  // Демографические данные
  const demographicData = [
    { label: "Мужчины", value: 45, color: "bg-blue-500" },
    { label: "Женщины", value: 55, color: "bg-pink-500" },
  ];

  const ageGroups = [
    { range: "18-25", count: 1250, percentage: 25 },
    { range: "26-35", count: 2100, percentage: 42 },
    { range: "36-45", count: 1050, percentage: 21 },
    { range: "46+", count: 600, percentage: 12 },
  ];

  const genderAgeData = {
    male: {
      percentage: 45,
      ageDistribution: [
        { range: "18-25", percentage: 28 },
        { range: "26-35", percentage: 38 },
        { range: "36-45", percentage: 22 },
        { range: "46+", percentage: 12 }
      ]
    },
    female: {
      percentage: 55,
      ageDistribution: [
        { range: "18-25", percentage: 22 },
        { range: "26-35", percentage: 45 },
        { range: "36-45", percentage: 20 },
        { range: "46+", percentage: 13 }
      ]
    }
  };

  const familyData = [
    { label: "Есть дети", value: 68, icon: "Baby" },
    { label: "Есть автомобиль", value: 74, icon: "Car" },
    { label: "Есть животные", value: 43, icon: "Heart" },
  ];

  // Финансовые данные с динамикой
  const incomeData = {
    week: { value: "82,300₽", change: "+5.2%", trend: [75, 78, 80, 82, 85, 83, 82], vsCompetitors: { value: "+8%", description: "выше конкурентов" } },
    month: { value: "85,500₽", change: "+12.5%", trend: [70, 72, 75, 80, 82, 84, 85], vsCompetitors: { value: "+11%", description: "выше конкурентов" } },
    quarter: { value: "83,200₽", change: "+8.7%", trend: [68, 70, 74, 78, 81, 83, 83], vsCompetitors: { value: "+9%", description: "выше конкурентов" } },
    year: { value: "79,800₽", change: "+15.3%", trend: [60, 65, 70, 73, 76, 78, 80], vsCompetitors: { value: "+13%", description: "выше конкурентов" } }
  };

  const expenseData = {
    week: { 
      value: "64,100₽", 
      change: "+3.8%", 
      trend: [58, 60, 62, 64, 66, 65, 64],
      vsCompetitors: { value: "+18%", description: "выше конкурентов" }
    },
    month: { 
      value: "67,200₽", 
      change: "+8.3%", 
      trend: [55, 58, 62, 65, 66, 67, 67],
      vsCompetitors: { value: "+15%", description: "выше конкурентов" }
    },
    quarter: { 
      value: "65,800₽", 
      change: "+6.1%", 
      trend: [52, 55, 59, 62, 64, 65, 66],
      vsCompetitors: { value: "+12%", description: "выше конкурентов" }
    },
    year: { 
      value: "61,400₽", 
      change: "+11.7%", 
      trend: [48, 52, 56, 58, 60, 61, 61],
      vsCompetitors: { value: "+20%", description: "выше конкурентов" }
    }
  };

  const averageCheckData = {
    week: { value: "2,380₽", change: "+2.1%", trend: [2100, 2200, 2300, 2380, 2400, 2350, 2380], vsCompetitors: { value: "+6%", description: "выше конкурентов" } },
    month: { value: "2,450₽", change: "+15.7%", trend: [2000, 2100, 2250, 2350, 2400, 2450, 2450], vsCompetitors: { value: "+12%", description: "выше конкурентов" } },
    quarter: { value: "2,320₽", change: "+8.9%", trend: [1950, 2050, 2150, 2250, 2300, 2320, 2320], vsCompetitors: { value: "+8%", description: "выше конкурентов" } },
    year: { value: "2,180₽", change: "+22.3%", trend: [1800, 1900, 2000, 2100, 2150, 2180, 2180], vsCompetitors: { value: "+18%", description: "выше конкурентов" } }
  };

  const creditLoadData = {
    week: { value: "22%", change: "-1.8%", trend: [25, 24, 23, 22, 21, 22, 22], vsCompetitors: { value: "-3%", description: "ниже конкурентов" } },
    month: { value: "23%", change: "-2.1%", trend: [26, 25, 24, 23, 22, 23, 23], vsCompetitors: { value: "-5%", description: "ниже конкурентов" } },
    quarter: { value: "24%", change: "-3.2%", trend: [28, 27, 26, 25, 24, 24, 24], vsCompetitors: { value: "-4%", description: "ниже конкурентов" } },
    year: { value: "25%", change: "-4.5%", trend: [30, 29, 27, 26, 25, 25, 25], vsCompetitors: { value: "-6%", description: "ниже конкурентов" } }
  };

  // Категории расходов
  const expenseCategories = [
    { name: "Продукты питания", amount: "18,500₽", percentage: 28, avgCheck: "1,250₽", color: "bg-emerald-500" },
    { name: "Транспорт", amount: "12,300₽", percentage: 18, avgCheck: "2,100₽", color: "bg-blue-500" },
    { name: "Развлечения", amount: "9,800₽", percentage: 15, avgCheck: "1,850₽", color: "bg-purple-500" },
    { name: "Одежда", amount: "7,600₽", percentage: 11, avgCheck: "3,200₽", color: "bg-pink-500" },
    { name: "Здоровье", amount: "6,200₽", percentage: 9, avgCheck: "1,950₽", color: "bg-red-500" },
    { name: "Коммунальные", amount: "4,800₽", percentage: 7, avgCheck: "4,800₽", color: "bg-orange-500" },
    { name: "Прочее", amount: "7,800₽", percentage: 12, avgCheck: "890₽", color: "bg-gray-500" },
  ];

  // Перетоки между сетями
  const flowData = [
    { from: "Пятерочка", to: "Магнит", people: 1240, money: "2.8М₽", trend: "+15%" },
    { from: "Лента", to: "Ашан", people: 890, money: "3.2М₽", trend: "+8%" },
    { from: "ВкусВилл", to: "Пятерочка", people: 650, money: "1.9М₽", trend: "-5%" },
    { from: "Магнит", to: "Лента", people: 420, money: "1.2М₽", trend: "+22%" },
  ];

  // География
  const regionData = [
    { region: "Москва", clients: 12500, avgSpend: "89,200₽", growth: "+18%" },
    { region: "СПб", clients: 8900, avgSpend: "76,400₽", growth: "+12%" },
    { region: "Екатеринбург", clients: 5600, avgSpend: "58,300₽", growth: "+9%" },
    { region: "Новосибирск", clients: 4200, avgSpend: "52,100₽", growth: "+15%" },
    { region: "Казань", clients: 3800, avgSpend: "48,900₽", growth: "+7%" },
  ];

  // Кредиты и ипотека
  const creditData = [
    { type: "Есть ипотека", percentage: 34, avgAmount: "2.8М₽" },
    { type: "Потребкредиты", percentage: 52, avgAmount: "485К₽" },
    { type: "Кредитные карты", percentage: 78, avgAmount: "125К₽" },
    { type: "Автокредиты", percentage: 23, avgAmount: "920К₽" },
  ];

  // Анализ корзины
  const basketAnalysis = [
    { category: "Премиум товары", share: 18, trend: "+12%", avgItems: 3.2 },
    { category: "Сезонные товары", share: 25, trend: "+8%", avgItems: 4.8 },
    { category: "Импульсивные покупки", share: 15, trend: "+22%", avgItems: 2.1 },
    { category: "Планируемые покупки", share: 42, trend: "+5%", avgItems: 8.5 },
  ];

  // Данные лояльности
  const purchaseFrequencyData = {
    week: { value: "1.2", change: "+8.5%", trend: [1.0, 1.1, 1.1, 1.2, 1.3, 1.2, 1.2], vsCompetitors: { value: "+25%", description: "выше конкурентов" } },
    month: { value: "6.0", change: "+12.2%", trend: [5.2, 5.4, 5.7, 5.9, 6.0, 6.1, 6.0], vsCompetitors: { value: "+18%", description: "выше конкурентов" } },
    quarter: { value: "18.5", change: "+15.8%", trend: [15.8, 16.2, 17.1, 17.8, 18.2, 18.5, 18.5], vsCompetitors: { value: "+22%", description: "выше конкурентов" } },
    year: { value: "72.0", change: "+18.3%", trend: [58, 62, 66, 69, 71, 72, 72], vsCompetitors: { value: "+28%", description: "выше конкурентов" } }
  };

  const lifeTimeData = {
    week: { value: "3.2 нед", change: "+5.2%", trend: [2.8, 2.9, 3.0, 3.1, 3.2, 3.2, 3.2], vsCompetitors: { value: "+15%", description: "выше конкурентов" } },
    month: { value: "21 мес", change: "+8.7%", trend: [18, 19, 20, 20, 21, 21, 21], vsCompetitors: { value: "+24%", description: "выше конкурентов" } },
    quarter: { value: "5.2 кв", change: "+12.1%", trend: [4.2, 4.5, 4.8, 5.0, 5.1, 5.2, 5.2], vsCompetitors: { value: "+28%", description: "выше конкурентов" } },
    year: { value: "1.8 лет", change: "+16.4%", trend: [1.4, 1.5, 1.6, 1.7, 1.8, 1.8, 1.8], vsCompetitors: { value: "+35%", description: "выше конкурентов" } }
  };

  const ltvData = {
    week: { value: "8,450₽", change: "+18.2%", trend: [6800, 7200, 7600, 8000, 8200, 8450, 8450], vsCompetitors: { value: "+42%", description: "выше конкурентов" } },
    month: { value: "147,300₽", change: "+22.5%", trend: [115000, 125000, 135000, 142000, 145000, 147300, 147300], vsCompetitors: { value: "+38%", description: "выше конкурентов" } },
    quarter: { value: "428,500₽", change: "+25.8%", trend: [320000, 350000, 380000, 410000, 425000, 428500, 428500], vsCompetitors: { value: "+45%", description: "выше конкурентов" } },
    year: { value: "562,800₽", change: "+28.3%", trend: [420000, 450000, 480000, 520000, 550000, 562800, 562800], vsCompetitors: { value: "+52%", description: "выше конкурентов" } }
  };

  // Данные кошелька клиента
  const walletData = {
    week: {
      segmentSpending: { value: "7,500₽", change: "+5.2%", trend: [6800, 7000, 7200, 7300, 7400, 7500, 7500] },
      companySpending: { value: "2,350₽", change: "+8.7%", trend: [2100, 2150, 2200, 2250, 2300, 2350, 2350] },
      shareInWallet: { value: "31.3%", change: "+2.8%", trend: [28.5, 29.2, 30.1, 30.8, 31.1, 31.3, 31.3] },
      dynamicsTrend: [28.5, 29.2, 30.1, 30.8, 31.1, 31.3, 31.3]
    },
    month: {
      segmentSpending: { value: "30,000₽", change: "+6.8%", trend: [27000, 28000, 28500, 29200, 29800, 30000, 30000] },
      companySpending: { value: "10,200₽", change: "+12.1%", trend: [8500, 9200, 9600, 9900, 10100, 10200, 10200] },
      shareInWallet: { value: "34.0%", change: "+4.2%", trend: [31.5, 32.8, 33.7, 33.9, 33.9, 34.0, 34.0] },
      dynamicsTrend: [31.5, 32.8, 33.7, 33.9, 33.9, 34.0, 34.0]
    },
    quarter: {
      segmentSpending: { value: "92,500₽", change: "+8.3%", trend: [82000, 85000, 87500, 89500, 91000, 92500, 92500] },
      companySpending: { value: "31,800₽", change: "+15.2%", trend: [26000, 28000, 29500, 30800, 31500, 31800, 31800] },
      shareInWallet: { value: "34.4%", change: "+5.8%", trend: [31.7, 32.9, 33.7, 34.4, 34.6, 34.4, 34.4] },
      dynamicsTrend: [31.7, 32.9, 33.7, 34.4, 34.6, 34.4, 34.4]
    },
    year: {
      segmentSpending: { value: "385,000₽", change: "+9.5%", trend: [320000, 340000, 355000, 370000, 380000, 385000, 385000] },
      companySpending: { value: "132,500₽", change: "+18.7%", trend: [105000, 115000, 122000, 128000, 130000, 132500, 132500] },
      shareInWallet: { value: "34.4%", change: "+7.2%", trend: [32.8, 33.8, 34.4, 34.6, 34.2, 34.4, 34.4] },
      dynamicsTrend: [32.8, 33.8, 34.4, 34.6, 34.2, 34.4, 34.4]
    }
  };

  // Данные рынка
  const marketShareData = {
    week: {
      ourShare: { value: "12.8%", change: "+0.3%", trend: [12.2, 12.3, 12.5, 12.6, 12.7, 12.8, 12.8] },
      totalMarketSize: { value: "2.8 млрд ₽", change: "+2.1%", trend: [2.65, 2.68, 2.72, 2.75, 2.77, 2.80, 2.80] },
      position: { value: "3-е место", change: "без изменений", competitors: ["Конкурент A (18.5%)", "Конкурент B (15.2%)", "Мы (12.8%)", "Конкурент C (11.4%)"] }
    },
    month: {
      ourShare: { value: "13.2%", change: "+0.8%", trend: [12.1, 12.4, 12.7, 13.0, 13.1, 13.2, 13.2] },
      totalMarketSize: { value: "11.5 млрд ₽", change: "+3.4%", trend: [10.8, 11.0, 11.2, 11.3, 11.4, 11.5, 11.5] },
      position: { value: "3-е место", change: "↑ с 4-го места", competitors: ["Конкурент A (18.1%)", "Конкурент B (14.8%)", "Мы (13.2%)", "Конкурент C (11.9%)"] }
    },
    quarter: {
      ourShare: { value: "13.7%", change: "+1.5%", trend: [11.8, 12.2, 12.8, 13.2, 13.5, 13.7, 13.7] },
      totalMarketSize: { value: "34.2 млрд ₽", change: "+5.2%", trend: [31.5, 32.0, 32.8, 33.5, 34.0, 34.2, 34.2] },
      position: { value: "2-е место", change: "↑ с 3-го места", competitors: ["Конкурент A (17.3%)", "Мы (13.7%)", "Конкурент B (13.1%)", "Конкурент C (12.4%)"] }
    },
    year: {
      ourShare: { value: "14.1%", change: "+2.3%", trend: [11.2, 11.8, 12.5, 13.1, 13.6, 14.1, 14.1] },
      totalMarketSize: { value: "142.8 млрд ₽", change: "+7.8%", trend: [125, 130, 135, 138, 141, 142.8, 142.8] },
      position: { value: "2-е место", change: "↑ с 4-го места", competitors: ["Конкурент A (16.8%)", "Мы (14.1%)", "Конкурент B (12.9%)", "Конкурент C (12.1%)"] }
    }
  };

  const marketGrowthData = {
    week: {
      overallGrowth: { value: "+2.1%", description: "рост рынка", trend: [1.5, 1.7, 1.9, 2.0, 2.1, 2.1, 2.1] },
      ourGrowth: { value: "+2.4%", description: "наш рост", trend: [1.8, 2.0, 2.2, 2.3, 2.4, 2.4, 2.4] },
      forecast: { value: "+2.3%", description: "прогноз на неделю", segment: "Питание вне дома" }
    },
    month: {
      overallGrowth: { value: "+3.4%", description: "рост рынка", trend: [2.8, 3.0, 3.2, 3.3, 3.4, 3.4, 3.4] },
      ourGrowth: { value: "+4.2%", description: "наш рост", trend: [3.5, 3.7, 3.9, 4.0, 4.1, 4.2, 4.2] },
      forecast: { value: "+3.8%", description: "прогноз на месяц", segment: "Питание вне дома" }
    },
    quarter: {
      overallGrowth: { value: "+5.2%", description: "рост рынка", trend: [4.1, 4.5, 4.8, 5.0, 5.1, 5.2, 5.2] },
      ourGrowth: { value: "+6.8%", description: "наш рост", trend: [5.2, 5.8, 6.2, 6.5, 6.7, 6.8, 6.8] },
      forecast: { value: "+5.8%", description: "прогноз на квартал", segment: "Питание вне дома" }
    },
    year: {
      overallGrowth: { value: "+7.8%", description: "рост рынка", trend: [5.5, 6.2, 6.8, 7.2, 7.5, 7.8, 7.8] },
      ourGrowth: { value: "+11.2%", description: "наш рост", trend: [7.8, 8.5, 9.2, 10.1, 10.8, 11.2, 11.2] },
      forecast: { value: "+8.5%", description: "прогноз на год", segment: "Питание вне дома" }
    }
  };

  // Данные PAM, TAM, SAM, SOM
  const marketSizeData = {
    week: {
      PAM: { 
        value: "325 млн ₽", 
        description: "Потенциально доступный рынок",
        calculation: "8 000 клиентов × 1.015 рост × 40 000 ₽",
        breakdown: { clients: "8 000", growth: "1.5%", price: "40 000 ₽" }
      },
      TAM: { 
        value: "320 млн ₽", 
        description: "Общий адресуемый рынок",
        calculation: "8 000 клиентов × 40 000 ₽",
        breakdown: { clients: "8 000", price: "40 000 ₽" }
      },
      SAM: { 
        value: "96 млн ₽", 
        description: "Обслуживаемый доступный рынок",
        calculation: "8 000 × 30% (готовы покупать) × 40 000 ₽",
        breakdown: { clients: "8 000", segment: "30%", price: "40 000 ₽" }
      },
      SOM: { 
        value: "9.6 млн ₽", 
        description: "Реально достижимый рынок",
        calculation: "10% (наша доля) × 96 млн ₽",
        breakdown: { share: "10%", sam: "96 млн ₽" }
      }
    },
    month: {
      PAM: { 
        value: "1.3 млрд ₽", 
        description: "Потенциально доступный рынок",
        calculation: "32 000 клиентов × 1.034 рост × 39 500 ₽",
        breakdown: { clients: "32 000", growth: "3.4%", price: "39 500 ₽" }
      },
      TAM: { 
        value: "1.26 млрд ₽", 
        description: "Общий адресуемый рынок",
        calculation: "32 000 клиентов × 39 500 ₽",
        breakdown: { clients: "32 000", price: "39 500 ₽" }
      },
      SAM: { 
        value: "378 млн ₽", 
        description: "Обслуживаемый доступный рынок",
        calculation: "32 000 × 30% (готовы покупать) × 39 500 ₽",
        breakdown: { clients: "32 000", segment: "30%", price: "39 500 ₽" }
      },
      SOM: { 
        value: "37.8 млн ₽", 
        description: "Реально достижимый рынок",
        calculation: "10% (наша доля) × 378 млн ₽",
        breakdown: { share: "10%", sam: "378 млн ₽" }
      }
    },
    quarter: {
      PAM: { 
        value: "4.2 млрд ₽", 
        description: "Потенциально доступный рынок",
        calculation: "105 000 клиентов × 1.052 рост × 38 000 ₽",
        breakdown: { clients: "105 000", growth: "5.2%", price: "38 000 ₽" }
      },
      TAM: { 
        value: "3.99 млрд ₽", 
        description: "Общий адресуемый рынок",
        calculation: "105 000 клиентов × 38 000 ₽",
        breakdown: { clients: "105 000", price: "38 000 ₽" }
      },
      SAM: { 
        value: "1.2 млрд ₽", 
        description: "Обслуживаемый доступный рынок",
        calculation: "105 000 × 30% (готовы покупать) × 38 000 ₽",
        breakdown: { clients: "105 000", segment: "30%", price: "38 000 ₽" }
      },
      SOM: { 
        value: "120 млн ₽", 
        description: "Реально достижимый рынок",
        calculation: "10% (наша доля) × 1.2 млрд ₽",
        breakdown: { share: "10%", sam: "1.2 млрд ₽" }
      }
    },
    year: {
      PAM: { 
        value: "17.8 млрд ₽", 
        description: "Потенциально доступный рынок",
        calculation: "450 000 клиентов × 1.078 рост × 36 500 ₽",
        breakdown: { clients: "450 000", growth: "7.8%", price: "36 500 ₽" }
      },
      TAM: { 
        value: "16.4 млрд ₽", 
        description: "Общий адресуемый рынок",
        calculation: "450 000 клиентов × 36 500 ₽",
        breakdown: { clients: "450 000", price: "36 500 ₽" }
      },
      SAM: { 
        value: "4.9 млрд ₽", 
        description: "Обслуживаемый доступный рынок",
        calculation: "450 000 × 30% (готовы покупать) × 36 500 ₽",
        breakdown: { clients: "450 000", segment: "30%", price: "36 500 ₽" }
      },
      SOM: { 
        value: "490 млн ₽", 
        description: "Реально достижимый рынок",
        calculation: "10% (наша доля) × 4.9 млрд ₽",
        breakdown: { share: "10%", sam: "4.9 млрд ₽" }
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-6">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-4 mb-2">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
            <Icon name="BarChart3" size={24} className="text-white" />
          </div>
          <div className="flex items-center gap-4">
            <img 
              src="https://cdn.poehali.dev/files/9558675f-6a97-45e5-b0bf-ebfdb20e7841.png" 
              alt="AI. Alfa Insight" 
              className="h-8 object-contain"
            />
            <div className="border-l border-slate-300 pl-4">
              <h1 className="text-2xl font-bold text-slate-900">Аналитика клиентов</h1>
              <p className="text-slate-600">Комплексный анализ поведения и предпочтений</p>
            </div>
          </div>
        </div>
        
        <div className="flex items-center gap-4 mt-6">
          <Select value={selectedPeriod} onValueChange={setSelectedPeriod}>
            <SelectTrigger className="w-40">
              <Icon name="Calendar" size={16} />
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="week">Неделя</SelectItem>
              <SelectItem value="month">Месяц</SelectItem>
              <SelectItem value="quarter">Квартал</SelectItem>
              <SelectItem value="year">Год</SelectItem>
            </SelectContent>
          </Select>
          
          <Select value={selectedRegion} onValueChange={setSelectedRegion}>
            <SelectTrigger className="w-40">
              <Icon name="MapPin" size={16} />
              <SelectValue placeholder="Регион" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Все регионы</SelectItem>
              <SelectItem value="moscow">Москва</SelectItem>
              <SelectItem value="spb">СПб</SelectItem>
              <SelectItem value="regions">Регионы</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Main Dashboard */}
      <Tabs defaultValue="key-insights" className="space-y-6">
        <div className="bg-white rounded-xl shadow-sm border p-4 mb-6">
          <TabsList className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-12 w-full gap-2 bg-slate-50 p-2 rounded-lg h-auto">
            <TabsTrigger 
              value="key-insights" 
              className="flex flex-col items-center gap-1 p-3 data-[state=active]:bg-amber-500 data-[state=active]:text-white transition-all duration-200 h-auto"
            >
              <Icon name="TrendingUp" size={18} />
              <span className="text-xs font-medium">Ключевое</span>
            </TabsTrigger>
            <TabsTrigger 
              value="market" 
              className="flex flex-col items-center gap-1 p-3 data-[state=active]:bg-red-500 data-[state=active]:text-white transition-all duration-200 h-auto"
            >
              <Icon name="BarChart2" size={18} />
              <span className="text-xs font-medium">Рынок</span>
            </TabsTrigger>
            <TabsTrigger 
              value="clients" 
              className="flex flex-col items-center gap-1 p-3 data-[state=active]:bg-emerald-500 data-[state=active]:text-white transition-all duration-200 h-auto"
            >
              <Icon name="Users" size={18} />
              <span className="text-xs font-medium">Клиенты</span>
            </TabsTrigger>
            <TabsTrigger 
              value="loyalty" 
              className="flex flex-col items-center gap-1 p-3 data-[state=active]:bg-blue-500 data-[state=active]:text-white transition-all duration-200 h-auto"
            >
              <Icon name="Heart" size={18} />
              <span className="text-xs font-medium">Лояльность</span>
            </TabsTrigger>
            <TabsTrigger 
              value="wallet" 
              className="flex flex-col items-center gap-1 p-3 data-[state=active]:bg-orange-500 data-[state=active]:text-white transition-all duration-200 h-auto"
            >
              <Icon name="Wallet" size={18} />
              <span className="text-xs font-medium">Кошелек</span>
            </TabsTrigger>
            <TabsTrigger 
              value="overview" 
              className="flex flex-col items-center gap-1 p-3 data-[state=active]:bg-purple-500 data-[state=active]:text-white transition-all duration-200 h-auto"
            >
              <Icon name="BarChart3" size={18} />
              <span className="text-xs font-medium">Обзор</span>
            </TabsTrigger>
            <TabsTrigger 
              value="demographics" 
              className="flex flex-col items-center gap-1 p-3 data-[state=active]:bg-green-500 data-[state=active]:text-white transition-all duration-200 h-auto"
            >
              <Icon name="Users" size={18} />
              <span className="text-xs font-medium">Демография</span>
            </TabsTrigger>
            <TabsTrigger 
              value="finances" 
              className="flex flex-col items-center gap-1 p-3 data-[state=active]:bg-emerald-500 data-[state=active]:text-white transition-all duration-200 h-auto"
            >
              <Icon name="DollarSign" size={18} />
              <span className="text-xs font-medium">Финансы</span>
            </TabsTrigger>
            <TabsTrigger 
              value="purchases" 
              className="flex flex-col items-center gap-1 p-3 data-[state=active]:bg-pink-500 data-[state=active]:text-white transition-all duration-200 h-auto"
            >
              <Icon name="ShoppingCart" size={18} />
              <span className="text-xs font-medium">Покупки</span>
            </TabsTrigger>
            <TabsTrigger 
              value="flows" 
              className="flex flex-col items-center gap-1 p-3 data-[state=active]:bg-teal-500 data-[state=active]:text-white transition-all duration-200 h-auto"
            >
              <Icon name="ArrowRightLeft" size={18} />
              <span className="text-xs font-medium">Перетоки</span>
            </TabsTrigger>

            <TabsTrigger 
              value="geography" 
              className="flex flex-col items-center gap-1 p-3 data-[state=active]:bg-indigo-500 data-[state=active]:text-white transition-all duration-200 h-auto"
            >
              <Icon name="MapPin" size={18} />
              <span className="text-xs font-medium">География</span>
            </TabsTrigger>

            <TabsTrigger 
              value="settings" 
              className="flex flex-col items-center gap-1 p-3 data-[state=active]:bg-slate-700 data-[state=active]:text-white transition-all duration-200 h-auto"
            >
              <Icon name="Settings" size={18} />
              <span className="text-xs font-medium">Настройки</span>
            </TabsTrigger>
          </TabsList>
        </div>

        {/* Ключевое */}
        <TabsContent value="key-insights" className="space-y-6">
          <div className="flex items-center gap-3 mb-6 p-4 bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl border-l-4 border-amber-500">
            <Icon name="TrendingUp" size={24} className="text-amber-600" />
            <div>
              <h2 className="text-xl font-bold text-amber-900">Ключевые инсайты</h2>
              <p className="text-sm text-amber-700">Значимые отклонения и гипотезы их возникновения</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-[80vh]">
            {/* Ключевые отклонения - занимает половину экрана */}
            <Card className="p-6 h-full">
              <CardTitle className="flex items-center gap-2 mb-6">
                <Icon name="AlertTriangle" size={20} className="text-amber-600" />
                Ключевые отклонения
              </CardTitle>
              
              <div className="space-y-4 h-full overflow-y-auto">
                {/* Положительные изменения */}
                <div className="space-y-3">
                  <h3 className="text-sm font-semibold text-green-700 flex items-center gap-2">
                    <Icon name="TrendingUp" size={16} />
                    Положительная динамика
                  </h3>
                  
                  <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-green-800">Средний чек</span>
                      <Badge className="bg-green-600 text-white">+18.5%</Badge>
                    </div>
                    <p className="text-sm text-green-700">
                      Рост с 2,840₽ до 3,365₽ за последний месяц
                    </p>
                  </div>

                  <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-green-800">Коэффициент удержания клиентов</span>
                      <Badge className="bg-green-600 text-white">+3.4%</Badge>
                    </div>
                    <p className="text-sm text-green-700">
                      Улучшение с 79.8% до 82.5% за месяц
                    </p>
                  </div>

                  <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-green-800">Время жизни клиента (LTV)</span>
                      <Badge className="bg-green-600 text-white">+8.7%</Badge>
                    </div>
                    <p className="text-sm text-green-700">
                      Увеличение с 14.2 до 15.4 месяцев
                    </p>
                  </div>
                </div>

                {/* Отрицательные изменения */}
                <div className="space-y-3">
                  <h3 className="text-sm font-semibold text-red-700 flex items-center gap-2">
                    <Icon name="TrendingDown" size={16} />
                    Негативная динамика
                  </h3>
                  
                  <div className="bg-red-50 rounded-lg p-4 border border-red-200">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-red-800">Количество заказов</span>
                      <Badge className="bg-red-600 text-white">-7.2%</Badge>
                    </div>
                    <p className="text-sm text-red-700">
                      Снижение с 15,240 до 14,142 заказов в месяц
                    </p>
                  </div>

                  <div className="bg-red-50 rounded-lg p-4 border border-red-200">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-red-800">Новые пользователи</span>
                      <Badge className="bg-red-600 text-white">-4.8%</Badge>
                    </div>
                    <p className="text-sm text-red-700">
                      Сокращение притока с 2,850 до 2,713 в месяц
                    </p>
                  </div>

                  <div className="bg-red-50 rounded-lg p-4 border border-red-200">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-red-800">Возвраты товаров</span>
                      <Badge className="bg-red-600 text-white">+15.3%</Badge>
                    </div>
                    <p className="text-sm text-red-700">
                      Рост с 3.1% до 3.6% от общего объема
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Выводы и гипотезы - занимает половину экрана */}
            <Card className="p-6 h-full">
              <CardTitle className="flex items-center gap-2 mb-6">
                <Icon name="Lightbulb" size={20} className="text-amber-600" />
                Гипотезы и выводы
              </CardTitle>
              
              <div className="space-y-6 h-full overflow-y-auto">
                {/* Основные гипотезы */}
                <div className="space-y-6">
                  <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-500">
                    <h4 className="font-semibold text-blue-800 mb-2">
                      💡 Рост среднего чека при снижении количества заказов
                    </h4>
                    <p className="text-sm text-blue-700 mb-3">
                      Клиенты стали покупать меньше, но дороже. Возможные причины:
                    </p>
                    <ul className="text-xs text-blue-600 space-y-1 ml-4 mb-4">
                      <li>• Сезонность: переход к покупке зимних товаров</li>
                      <li>• Улучшение ассортимента премиум-сегмента</li>
                      <li>• Изменение поведения: более осознанные покупки</li>
                    </ul>
                    
                    <div className="bg-white rounded-lg p-3 border border-blue-200">
                      <h5 className="font-medium text-blue-800 mb-2 flex items-center gap-2">
                        <Icon name="CheckCircle" size={14} />
                        Рекомендации к действию
                      </h5>
                      <div className="space-y-2">
                        <div className="flex items-start gap-2">
                          <Badge className="bg-green-600 text-white text-xs">Высокий</Badge>
                          <span className="text-xs text-blue-700">Поставить задачу команде аналитики на исследование сезонных трендов и подготовить прогноз спроса за 1 неделю</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <Badge className="bg-blue-600 text-white text-xs">Средний</Badge>
                          <span className="text-xs text-blue-700">Дать задание команде закупок расширить премиальный ассортимент на 20% к декабрю</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-purple-50 rounded-lg p-4 border-l-4 border-purple-500">
                    <h4 className="font-semibold text-purple-800 mb-2">
                      💡 Повышение лояльности и удержания клиентов
                    </h4>
                    <p className="text-sm text-purple-700 mb-3">
                      Рост коэффициента удержания с 79.8% до 82.5% указывает на успешные инициативы:
                    </p>
                    <ul className="text-xs text-purple-600 space-y-1 ml-4 mb-4">
                      <li>• Эффективность программы лояльности и персональных предложений</li>
                      <li>• Улучшение качества клиентского сервиса</li>
                      <li>• Успешная сегментация и таргетированные кампании</li>
                      <li>• Повышение удовлетворенности качеством товаров и услуг</li>
                    </ul>
                    
                    <div className="bg-white rounded-lg p-3 border border-purple-200">
                      <h5 className="font-medium text-purple-800 mb-2 flex items-center gap-2">
                        <Icon name="CheckCircle" size={14} />
                        Рекомендации к действию
                      </h5>
                      <div className="space-y-2">
                        <div className="flex items-start gap-2">
                          <Badge className="bg-green-600 text-white text-xs">Высокий</Badge>
                          <span className="text-xs text-purple-700">Поставить задачу CRM-команде масштабировать успешные практики удержания на все сегменты клиентов за 2 недели</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <Badge className="bg-purple-600 text-white text-xs">Средний</Badge>
                          <span className="text-xs text-purple-700">Дать задание команде аналитики провести углубленный анализ драйверов удержания и подготовить план усиления за 3 недели</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <Badge className="bg-blue-600 text-white text-xs">Средний</Badge>
                          <span className="text-xs text-purple-700">Поставить задачу команде продукта внедрить дополнительные инструменты персонализации за 4 недели</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-orange-50 rounded-lg p-4 border-l-4 border-orange-500">
                    <h4 className="font-semibold text-orange-800 mb-2">
                      💡 Проблема с возвратами
                    </h4>
                    <p className="text-sm text-orange-700 mb-3">
                      Рост возвратов требует внимания:
                    </p>
                    <ul className="text-xs text-orange-600 space-y-1 ml-4 mb-4">
                      <li>• Проверить качество новых поставщиков</li>
                      <li>• Улучшить описания товаров</li>
                      <li>• Анализ отзывов и причин возвратов</li>
                    </ul>
                    
                    <div className="bg-white rounded-lg p-3 border border-orange-200">
                      <h5 className="font-medium text-orange-800 mb-2 flex items-center gap-2">
                        <Icon name="CheckCircle" size={14} />
                        Рекомендации к действию
                      </h5>
                      <div className="space-y-2">
                        <div className="flex items-start gap-2">
                          <Badge className="bg-red-600 text-white text-xs">Критический</Badge>
                          <span className="text-xs text-orange-700">Поставить задачу команде качества провести аудит поставщиков и подготовить отчет с планом устранения проблем за 1 неделю</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <Badge className="bg-orange-600 text-white text-xs">Высокий</Badge>
                          <span className="text-xs text-orange-700">Дать задание команде контента улучшить описания товаров и добавить больше фотографий за 2 недели</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <Badge className="bg-yellow-600 text-white text-xs">Средний</Badge>
                          <span className="text-xs text-orange-700">Поставить задачу службе поддержки создать систему категоризации причин возвратов за 1 неделю</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-red-50 rounded-lg p-4 border-l-4 border-red-500">
                    <h4 className="font-semibold text-red-800 mb-2">
                      💡 Снижение притока новых клиентов
                    </h4>
                    <p className="text-sm text-red-700 mb-3">
                      Падение на 4.8% требует активных мер по привлечению:
                    </p>
                    <ul className="text-xs text-red-600 space-y-1 ml-4 mb-4">
                      <li>• Снижение эффективности текущих каналов привлечения</li>
                      <li>• Усиление конкуренции на рынке</li>
                      <li>• Сезонный спад активности пользователей</li>
                    </ul>
                    
                    <div className="bg-white rounded-lg p-3 border border-red-200">
                      <h5 className="font-medium text-red-800 mb-2 flex items-center gap-2">
                        <Icon name="CheckCircle" size={14} />
                        Рекомендации к действию
                      </h5>
                      <div className="space-y-2">
                        <div className="flex items-start gap-2">
                          <Badge className="bg-red-600 text-white text-xs">Критический</Badge>
                          <span className="text-xs text-red-700">Поставить задачу команде маркетинга на разработка плана увеличения привлечения новых клиентов на 15% за 2 недели</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <Badge className="bg-orange-600 text-white text-xs">Высокий</Badge>
                          <span className="text-xs text-red-700">Дать задание performance-команде провести аудит эффективности рекламных каналов за 1 неделю</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <Badge className="bg-yellow-600 text-white text-xs">Средний</Badge>
                          <span className="text-xs text-red-700">Поставить задачу команде продукта запустить реферальную программу за 3 недели</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </TabsContent>

        {/* Клиенты */}
        <TabsContent value="clients" className="space-y-6">
          <div className="flex items-center gap-3 mb-6 p-4 bg-gradient-to-r from-emerald-50 to-green-50 rounded-xl border-l-4 border-emerald-500">
            <Icon name="Users" size={24} className="text-emerald-600" />
            <div>
              <h2 className="text-xl font-bold text-emerald-900">Анализ клиентской базы</h2>
              <p className="text-sm text-emerald-700">Метрики активности и роста клиентов</p>
            </div>
          </div>

          {/* Главные выводы по клиентской базе */}
          <Card className="p-5 bg-gradient-to-r from-indigo-50 to-purple-50 border-2 border-indigo-200 mb-6">
            <div className="flex items-center gap-2 mb-3">
              <Icon name="Lightbulb" size={18} className="text-indigo-600" />
              <h3 className="font-bold text-indigo-800">Ключевые изменения клиентского портфеля</h3>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-emerald-500 rounded-full mt-1.5 flex-shrink-0"></div>
                <div>
                  <span className="font-semibold text-emerald-700">Качество клиентов растёт:</span>
                  <span className="text-slate-700 ml-1">LTV увеличился на 8.7%, средний чек +18.5%, при этом количество покупок снизилось на 7.2% — клиенты покупают реже, но существенно больше</span>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-1.5 flex-shrink-0"></div>
                <div>
                  <span className="font-semibold text-blue-700">Усиливается ядро лояльных:</span>
                  <span className="text-slate-700 ml-1">Коэффициент удержания вырос до 82.5% (+3.4%), при этом 12% VIP-клиентов генерируют 58% выручки — концентрация на премиум-сегменте окупается</span>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-amber-500 rounded-full mt-1.5 flex-shrink-0"></div>
                <div>
                  <span className="font-semibold text-amber-700">Риск оттока новых клиентов:</span>
                  <span className="text-slate-700 ml-1">Приток новых клиентов растёт (+30.7% за неделю), но их доля в общей базе 18.4% — необходимо усилить onboarding для конвертации в постоянных</span>
                </div>
              </div>
            </div>
          </Card>

          {/* Новые клиенты - первый блок */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            <Card className="p-6">
              <CardTitle className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <Icon name="UserPlus" size={20} />
                  Новые клиенты
                </div>
                <div className="relative group">
                  <Icon name="HelpCircle" size={16} className="text-slate-400 hover:text-slate-600 cursor-help" />
                  <div className="absolute right-0 top-6 w-64 p-3 bg-slate-800 text-white text-xs rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity z-10 pointer-events-none">
                    <div className="font-semibold mb-1">Методология расчета:</div>
                    <div>Новые клиенты определяются как уникальные идентификаторы, совершившие первую покупку в текущем периоде. Сравнение с рынком основано на отраслевых данных аналогичных компаний.</div>
                  </div>
                </div>
              </CardTitle>
              
              <div className="space-y-4">
                <div className="bg-orange-50 rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-slate-600">Изменение за период</span>
                    <Badge className="bg-red-600 text-white">-4.8%</Badge>
                  </div>
                  <div className="text-2xl font-bold text-orange-700 mb-1">
                    2,713
                  </div>
                  <div className="text-sm text-slate-600">
                    Предыдущий месяц: 2,850
                  </div>
                </div>

                <div className="bg-slate-50 rounded-lg p-4">
                  <h4 className="font-semibold text-slate-800 mb-3">Сравнение с рынком</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Наша компания</span>
                      <div className="flex items-center gap-2">
                        <div className="w-20 bg-slate-200 rounded-full h-2">
                          <div className="bg-red-500 h-2 rounded-full" style={{width: '45%'}}></div>
                        </div>
                        <span className="text-sm font-bold text-red-600">-4.8%</span>
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Средний по рынку</span>
                      <div className="flex items-center gap-2">
                        <div className="w-20 bg-slate-200 rounded-full h-2">
                          <div className="bg-green-500 h-2 rounded-full" style={{width: '60%'}}></div>
                        </div>
                        <span className="text-sm font-bold text-green-600">+2.1%</span>
                      </div>
                    </div>

                    <div className="flex justify-between items-center">
                      <span className="text-sm">Топ конкуренты</span>
                      <div className="flex items-center gap-2">
                        <div className="w-20 bg-slate-200 rounded-full h-2">
                          <div className="bg-blue-500 h-2 rounded-full" style={{width: '80%'}}></div>
                        </div>
                        <span className="text-sm font-bold text-blue-600">+7.3%</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-purple-50 via-blue-50 to-cyan-50 rounded-xl p-6 border border-blue-200 shadow-lg">
                  <h4 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
                    <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full animate-pulse"></div>
                    Динамика роста за 7 дней
                    <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full animate-pulse"></div>
                  </h4>
                  
                  {/* Интерактивный график с анимацией */}
                  <div className="relative">
                    {/* Фоновая сетка */}
                    <div className="absolute inset-0 h-20 w-full">
                      {Array.from({length: 4}).map((_, i) => (
                        <div key={i} className="absolute w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" style={{top: `${i * 25}%`}}></div>
                      ))}
                    </div>
                    
                    {/* График с liquid эффектом */}
                    <div className="relative flex items-end gap-2 h-20 mb-4">
                      {[2180, 2540, 2380, 2650, 2420, 2713, 2850].map((value, index) => {
                        const maxValue = Math.max(2180, 2540, 2380, 2650, 2420, 2713, 2850);
                        const normalizedHeight = (value / maxValue) * 100;
                        const dayNames = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
                        
                        return (
                          <div key={index} className="flex-1 relative group cursor-pointer">
                            {/* Анимированная колонка */}
                            <div className="relative overflow-hidden rounded-full bg-gradient-to-t from-slate-200 to-slate-100 w-full transition-all duration-700 hover:scale-110">
                              <div
                                className={`
                                  w-full transition-all duration-1000 ease-out rounded-full
                                  ${index === 6 ? 'bg-gradient-to-t from-emerald-600 via-emerald-400 to-emerald-300 shadow-lg shadow-emerald-500/50' : 
                                    index === 0 ? 'bg-gradient-to-t from-purple-500 via-purple-400 to-purple-300 shadow-lg shadow-purple-500/30' :
                                    'bg-gradient-to-t from-blue-500 via-cyan-400 to-cyan-300 shadow-lg shadow-blue-500/30'}
                                  animate-pulse
                                `}
                                style={{ 
                                  height: `${Math.max(normalizedHeight, 15)}%`,
                                  animationDelay: `${index * 200}ms`
                                }}
                              >
                                {/* Блестящий эффект */}
                                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-white/40 to-transparent rounded-full"></div>
                                
                                {/* Эффект волны */}
                                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-white/20 via-white/40 to-white/20 rounded-full animate-pulse"></div>
                              </div>
                            </div>
                            
                            {/* Tooltip при наведении */}
                            <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 z-10">
                              <div className="bg-slate-800 text-white text-xs px-3 py-2 rounded-lg shadow-lg whitespace-nowrap">
                                <div className="font-bold">{value.toLocaleString()} клиентов</div>
                                <div className="text-slate-300">{dayNames[index]}</div>
                                <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-slate-800 rotate-45"></div>
                              </div>
                            </div>
                            
                            {/* День недели */}
                            <div className="mt-2 text-center">
                              <div className={`text-xs font-medium transition-colors duration-300 ${index === 6 ? 'text-emerald-600' : 'text-slate-600'}`}>
                                {dayNames[index]}
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                    
                    {/* Статистика изменения */}
                    <div className="flex justify-between items-center mt-4 p-3 bg-white/60 backdrop-blur-sm rounded-lg border border-white/40">
                      <div className="flex items-center gap-2">
                        <Icon name="TrendingUp" size={14} className="text-emerald-600" />
                        <span className="text-sm font-medium text-slate-700">Рост за неделю</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-lg font-bold text-emerald-600">+30.7%</span>
                        <div className="px-2 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-medium">
                          +670 клиентов
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-3 border border-green-200">
                    <div className="text-center">
                      <div className="text-sm text-slate-600 mb-1">Доля от общей базы</div>
                      <div className="text-lg font-bold text-emerald-700">18.4%</div>
                      <div className="text-xs text-slate-500">новые из 14,750 клиентов</div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-purple-50 to-violet-50 rounded-lg p-3 border border-purple-200">
                    <div className="text-center">
                      <div className="text-sm text-slate-600 mb-1">Выручка с новых</div>
                      <div className="text-lg font-bold text-purple-700">8.7млн ₽</div>
                      <div className="text-xs text-slate-500">22% от общей выручки</div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <CardTitle className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <Icon name="Crown" size={20} />
                  Самые доходные клиенты
                </div>
                <div className="relative group">
                  <Icon name="HelpCircle" size={16} className="text-slate-400 hover:text-slate-600 cursor-help" />
                  <div className="absolute right-0 top-6 w-64 p-3 bg-slate-800 text-white text-xs rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity z-10 pointer-events-none">
                    <div className="font-semibold mb-1">Методология расчета:</div>
                    <div>Анализ основан на общей сумме покупок клиентов. Сегментация проводится по демографическим данным: пол, возраст, доход, наличие детей и животных.</div>
                  </div>
                </div>
              </CardTitle>
              
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-yellow-50 to-amber-50 rounded-lg p-4 border border-yellow-200">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-slate-600">Средние траты VIP-клиентов</span>
                    <Badge className="bg-yellow-600 text-white">+248% к среднему</Badge>
                  </div>
                  <div className="text-2xl font-bold text-amber-700 mb-1">
                    47,200₽
                  </div>
                  <div className="text-sm text-slate-600">
                    Средний клиент тратит: 13,600₽
                  </div>
                </div>

                <div className="bg-slate-50 rounded-lg p-4">
                  <h4 className="font-semibold text-slate-800 mb-3">Портрет самых доходных клиентов</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <span className="text-sm">👩 Женщины 35-45 лет</span>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-bold text-slate-900">68%</div>
                        <div className="text-xs text-slate-600">доля группы</div>
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <span className="text-sm">💰 Доход 150k+ в месяц</span>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-bold text-slate-900">82%</div>
                        <div className="text-xs text-slate-600">имеют высокий доход</div>
                      </div>
                    </div>

                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <span className="text-sm">👶 С детьми (1-2 ребенка)</span>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-bold text-slate-900">74%</div>
                        <div className="text-xs text-slate-600">имеют детей</div>
                      </div>
                    </div>

                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <span className="text-sm">🐕 Владельцы животных</span>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-bold text-slate-900">45%</div>
                        <div className="text-xs text-slate-600">имеют питомцев</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-3 border border-green-200">
                  <div className="text-center">
                    <div className="text-sm text-slate-600 mb-1">Составляют от общей базы</div>
                    <div className="text-xl font-bold text-emerald-700">12%</div>
                    <div className="text-xs text-slate-500">но приносят 58% выручки</div>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Количество покупок */}
            <Card className="p-6">
              <CardTitle className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <Icon name="ShoppingCart" size={20} />
                  Количество покупок
                </div>
                <div className="relative group">
                  <Icon name="HelpCircle" size={16} className="text-slate-400 hover:text-slate-600 cursor-help" />
                  <div className="absolute right-0 top-6 w-64 p-3 bg-slate-800 text-white text-xs rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity z-10 pointer-events-none">
                    <div className="font-semibold mb-1">Методология расчета:</div>
                    <div>Данные строятся на основе эквайринга - подсчитываются все успешные транзакции за выбранный период с группировкой по дате.</div>
                  </div>
                </div>
              </CardTitle>
              
              <div className="space-y-4">
                <div className="bg-blue-50 rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-slate-600">За текущий месяц</span>
                    <Badge className="bg-red-600 text-white">-7.2%</Badge>
                  </div>
                  <div className="text-2xl font-bold text-blue-700 mb-1">
                    14,142
                  </div>
                  <div className="text-sm text-slate-600">
                    Предыдущий месяц: 15,240
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-3 bg-slate-50 rounded-lg">
                    <div className="text-lg font-bold text-slate-900">847</div>
                    <div className="text-xs text-slate-600">среднее в день</div>
                  </div>
                  <div className="text-center p-3 bg-slate-50 rounded-lg">
                    <div className="text-lg font-bold text-slate-900">2.3</div>
                    <div className="text-xs text-slate-600">покупки на клиента</div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Количество уникальных покупателей */}
            <Card className="p-6">
              <CardTitle className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <Icon name="UserCheck" size={20} />
                  Уникальные покупатели
                </div>
                <div className="relative group">
                  <Icon name="HelpCircle" size={16} className="text-slate-400 hover:text-slate-600 cursor-help" />
                  <div className="absolute right-0 top-6 w-64 p-3 bg-slate-800 text-white text-xs rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity z-10 pointer-events-none">
                    <div className="font-semibold mb-1">Методология расчета:</div>
                    <div>Данные строятся на основе эквайринга с агрегацией по единому идентификатору клиента (номер карты, телефон, email) для исключения дублирования.</div>
                  </div>
                </div>
              </CardTitle>
              
              <div className="space-y-4">
                <div className="bg-green-50 rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-slate-600">За текущий месяц</span>
                    <Badge className="bg-green-600 text-white">+3.4%</Badge>
                  </div>
                  <div className="text-2xl font-bold text-green-700 mb-1">
                    6,174
                  </div>
                  <div className="text-sm text-slate-600">
                    Предыдущий месяц: 5,971
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-3 bg-slate-50 rounded-lg">
                    <div className="text-lg font-bold text-slate-900">4,892</div>
                    <div className="text-xs text-slate-600">постоянные клиенты</div>
                  </div>
                  <div className="text-center p-3 bg-slate-50 rounded-lg">
                    <div className="text-lg font-bold text-slate-900">1,282</div>
                    <div className="text-xs text-slate-600">новые клиенты</div>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Коэффициент удержания клиентов */}
            <Card className="p-6">
              <CardTitle className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <Icon name="UserCheck" size={20} />
                  Коэффициент удержания клиентов
                </div>
                <div className="relative group">
                  <Icon name="HelpCircle" size={16} className="text-slate-400 hover:text-slate-600 cursor-help" />
                  <div className="absolute right-0 top-6 w-80 p-3 bg-slate-800 text-white text-xs rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity z-10 pointer-events-none">
                    <div className="font-semibold mb-2">Методология расчета Retention Rate:</div>
                    <div className="mb-2">
                      <strong>Формула:</strong> (Количество клиентов в конце периода - Новые клиенты) / Количество клиентов в начале периода × 100%
                    </div>
                    <div className="mb-2">
                      <strong>Пример:</strong> (5000 - 500) / 4500 × 100% = 100%
                    </div>
                    <div>
                      Показывает долю клиентов, которые продолжают совершать покупки в текущем периоде относительно предыдущего.
                    </div>
                  </div>
                </div>
              </CardTitle>
              
              <div className="space-y-4">
                <div className="bg-indigo-50 rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-slate-600">Retention Rate за {selectedPeriod === 'week' ? 'неделю' : selectedPeriod === 'month' ? 'месяц' : selectedPeriod === 'quarter' ? 'квартал' : 'год'}</span>
                    <Badge className="bg-indigo-600 text-white">
                      {selectedPeriod === 'week' ? '+2.1%' : selectedPeriod === 'month' ? '+3.4%' : selectedPeriod === 'quarter' ? '+1.8%' : '+4.2%'}
                    </Badge>
                  </div>
                  <div className="text-2xl font-bold text-indigo-700 mb-1">
                    {selectedPeriod === 'week' ? '87.3%' : selectedPeriod === 'month' ? '82.5%' : selectedPeriod === 'quarter' ? '76.8%' : '68.2%'}
                  </div>
                  <div className="text-sm text-slate-600">
                    {selectedPeriod === 'week' ? '4,328 из 4,958 клиентов вернулись' : 
                     selectedPeriod === 'month' ? '4,125 из 5,000 клиентов активны' :
                     selectedPeriod === 'quarter' ? '3,840 из 5,000 клиентов сохранены' : 
                     '3,410 из 5,000 клиентов удержаны'}
                  </div>
                </div>

                <div className="bg-slate-50 rounded-lg p-4">
                  <h4 className="font-semibold text-slate-800 mb-3">Сравнение с отраслевыми бенчмарками</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Наша компания</span>
                      <div className="flex items-center gap-2">
                        <div className="w-24 bg-slate-200 rounded-full h-2">
                          <div className="bg-indigo-500 h-2 rounded-full" style={{width: selectedPeriod === 'week' ? '87%' : selectedPeriod === 'month' ? '83%' : selectedPeriod === 'quarter' ? '77%' : '68%'}}></div>
                        </div>
                        <span className="text-sm font-bold text-indigo-600">
                          {selectedPeriod === 'week' ? '87.3%' : selectedPeriod === 'month' ? '82.5%' : selectedPeriod === 'quarter' ? '76.8%' : '68.2%'}
                        </span>
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Средний по отрасли</span>
                      <div className="flex items-center gap-2">
                        <div className="w-24 bg-slate-200 rounded-full h-2">
                          <div className="bg-orange-500 h-2 rounded-full" style={{width: selectedPeriod === 'week' ? '75%' : selectedPeriod === 'month' ? '68%' : selectedPeriod === 'quarter' ? '58%' : '45%'}}></div>
                        </div>
                        <span className="text-sm font-bold text-orange-600">
                          {selectedPeriod === 'week' ? '75.2%' : selectedPeriod === 'month' ? '68.1%' : selectedPeriod === 'quarter' ? '58.4%' : '45.3%'}
                        </span>
                      </div>
                    </div>

                    <div className="flex justify-between items-center">
                      <span className="text-sm">Лучшие в отрасли</span>
                      <div className="flex items-center gap-2">
                        <div className="w-24 bg-slate-200 rounded-full h-2">
                          <div className="bg-green-500 h-2 rounded-full" style={{width: selectedPeriod === 'week' ? '92%' : selectedPeriod === 'month' ? '89%' : selectedPeriod === 'quarter' ? '84%' : '76%'}}></div>
                        </div>
                        <span className="text-sm font-bold text-green-600">
                          {selectedPeriod === 'week' ? '92.1%' : selectedPeriod === 'month' ? '89.3%' : selectedPeriod === 'quarter' ? '84.7%' : '76.5%'}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 rounded-lg p-4">
                  <h4 className="font-semibold text-slate-800 mb-3">Динамика удержания за 7 периодов</h4>
                  
                  {/* Линейный график */}
                  <div className="relative h-32 mb-4">
                    {/* Сетка фона */}
                    <div className="absolute inset-0">
                      {/* Горизонтальные линии */}
                      <div className="absolute top-0 left-0 right-0 h-px bg-slate-200"></div>
                      <div className="absolute top-1/4 left-0 right-0 h-px bg-slate-100"></div>
                      <div className="absolute top-2/4 left-0 right-0 h-px bg-slate-200"></div>
                      <div className="absolute top-3/4 left-0 right-0 h-px bg-slate-100"></div>
                      <div className="absolute bottom-0 left-0 right-0 h-px bg-slate-200"></div>
                      
                      {/* Вертикальные линии */}
                      {Array.from({length: 8}).map((_, i) => (
                        <div key={i} className="absolute top-0 bottom-0 w-px bg-slate-100" style={{left: `${(i / 7) * 100}%`}}></div>
                      ))}
                    </div>
                    
                    {/* Y-ось с метками */}
                    <div className="absolute -left-8 top-0 bottom-0 flex flex-col justify-between text-xs text-slate-500">
                      <span>{selectedPeriod === 'week' ? '90%' : selectedPeriod === 'month' ? '85%' : selectedPeriod === 'quarter' ? '80%' : '70%'}</span>
                      <span>{selectedPeriod === 'week' ? '85%' : selectedPeriod === 'month' ? '80%' : selectedPeriod === 'quarter' ? '75%' : '65%'}</span>
                      <span>{selectedPeriod === 'week' ? '80%' : selectedPeriod === 'month' ? '75%' : selectedPeriod === 'quarter' ? '70%' : '60%'}</span>
                    </div>
                    
                    {/* График */}
                    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 300 120" preserveAspectRatio="none">
                      {/* Линия тренда */}
                      <path
                        d={(() => {
                          const data = selectedPeriod === 'week' ? [82.1, 83.5, 85.2, 86.1, 87.0, 87.3, 87.3] :
                                    selectedPeriod === 'month' ? [76.8, 78.2, 79.5, 80.8, 81.9, 82.2, 82.5] :
                                    selectedPeriod === 'quarter' ? [71.2, 72.8, 74.1, 75.3, 76.0, 76.5, 76.8] :
                                    [62.1, 63.8, 65.2, 66.7, 67.5, 68.0, 68.2];
                          const minValue = selectedPeriod === 'week' ? 80 : selectedPeriod === 'month' ? 75 : selectedPeriod === 'quarter' ? 70 : 60;
                          const maxValue = selectedPeriod === 'week' ? 90 : selectedPeriod === 'month' ? 85 : selectedPeriod === 'quarter' ? 80 : 70;
                          
                          return data.map((value, index) => {
                            const x = (index / 6) * 300;
                            const y = 120 - ((value - minValue) / (maxValue - minValue)) * 120;
                            return `${index === 0 ? 'M' : 'L'} ${x} ${y}`;
                          }).join(' ');
                        })()}
                        stroke="rgb(99 102 241)"
                        strokeWidth="2"
                        fill="none"
                        className="drop-shadow-sm"
                      />
                      
                      {/* Градиентная заливка под линией */}
                      <defs>
                        <linearGradient id="retentionGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" style={{stopColor: 'rgb(99 102 241)', stopOpacity: 0.3}} />
                          <stop offset="100%" style={{stopColor: 'rgb(99 102 241)', stopOpacity: 0.05}} />
                        </linearGradient>
                      </defs>
                      <path
                        d={(() => {
                          const data = selectedPeriod === 'week' ? [82.1, 83.5, 85.2, 86.1, 87.0, 87.3, 87.3] :
                                    selectedPeriod === 'month' ? [76.8, 78.2, 79.5, 80.8, 81.9, 82.2, 82.5] :
                                    selectedPeriod === 'quarter' ? [71.2, 72.8, 74.1, 75.3, 76.0, 76.5, 76.8] :
                                    [62.1, 63.8, 65.2, 66.7, 67.5, 68.0, 68.2];
                          const minValue = selectedPeriod === 'week' ? 80 : selectedPeriod === 'month' ? 75 : selectedPeriod === 'quarter' ? 70 : 60;
                          const maxValue = selectedPeriod === 'week' ? 90 : selectedPeriod === 'month' ? 85 : selectedPeriod === 'quarter' ? 80 : 70;
                          
                          const path = data.map((value, index) => {
                            const x = (index / 6) * 300;
                            const y = 120 - ((value - minValue) / (maxValue - minValue)) * 120;
                            return `${index === 0 ? 'M' : 'L'} ${x} ${y}`;
                          }).join(' ');
                          
                          return `${path} L 300 120 L 0 120 Z`;
                        })()}
                        fill="url(#retentionGradient)"
                      />
                      
                      {/* Точки на графике */}
                      {(selectedPeriod === 'week' ? [82.1, 83.5, 85.2, 86.1, 87.0, 87.3, 87.3] :
                        selectedPeriod === 'month' ? [76.8, 78.2, 79.5, 80.8, 81.9, 82.2, 82.5] :
                        selectedPeriod === 'quarter' ? [71.2, 72.8, 74.1, 75.3, 76.0, 76.5, 76.8] :
                        [62.1, 63.8, 65.2, 66.7, 67.5, 68.0, 68.2]).map((value, index) => {
                        const minValue = selectedPeriod === 'week' ? 80 : selectedPeriod === 'month' ? 75 : selectedPeriod === 'quarter' ? 70 : 60;
                        const maxValue = selectedPeriod === 'week' ? 90 : selectedPeriod === 'month' ? 85 : selectedPeriod === 'quarter' ? 80 : 70;
                        const x = (index / 6) * 300;
                        const y = 120 - ((value - minValue) / (maxValue - minValue)) * 120;
                        
                        return (
                          <g key={index}>
                            {/* Точка с тенью */}
                            <circle cx={x} cy={y} r="3" fill="white" stroke="rgb(99 102 241)" strokeWidth="2" className="drop-shadow-sm" />
                            {/* Hover эффект */}
                            <circle cx={x} cy={y} r="8" fill="transparent" className="hover:fill-indigo-100 hover:fill-opacity-50 cursor-pointer">
                              <title>{`Период ${index + 1}: ${value}%`}</title>
                            </circle>
                          </g>
                        );
                      })}
                    </svg>
                  </div>
                  
                  {/* X-ось с метками */}
                  <div className="flex justify-between text-xs text-slate-600 mb-2">
                    <span>7 {selectedPeriod === 'week' ? 'нед' : selectedPeriod === 'month' ? 'мес' : selectedPeriod === 'quarter' ? 'кв' : 'лет'} назад</span>
                    <span>6</span>
                    <span>5</span>
                    <span>4</span>
                    <span>3</span>
                    <span>2</span>
                    <span>1</span>
                    <span>текущий</span>
                  </div>
                  
                  {/* Дополнительная информация */}
                  <div className="flex items-center justify-between pt-2 border-t border-blue-200">
                    <div className="flex items-center gap-4 text-xs">
                      <div className="flex items-center gap-1">
                        <div className="w-3 h-0.5 bg-indigo-500 rounded"></div>
                        <span className="text-slate-600">Retention Rate</span>
                      </div>
                      <span className="text-slate-500">
                        Тренд: {selectedPeriod === 'week' ? '+5.2%' : selectedPeriod === 'month' ? '+5.7%' : selectedPeriod === 'quarter' ? '+5.6%' : '+6.1%'} за период
                      </span>
                    </div>
                    <div className="text-xs text-slate-500">
                      Лучший результат: {selectedPeriod === 'week' ? '87.3%' : selectedPeriod === 'month' ? '82.5%' : selectedPeriod === 'quarter' ? '76.8%' : '68.2%'}
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-3 border border-green-200">
                    <div className="text-center">
                      <div className="text-sm text-slate-600 mb-1">Преимущество</div>
                      <div className="text-lg font-bold text-emerald-700">
                        +{selectedPeriod === 'week' ? '12.1' : selectedPeriod === 'month' ? '14.4' : selectedPeriod === 'quarter' ? '18.4' : '22.9'}%
                      </div>
                      <div className="text-xs text-slate-500">vs средний по отрасли</div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-purple-50 to-violet-50 rounded-lg p-3 border border-purple-200">
                    <div className="text-center">
                      <div className="text-sm text-slate-600 mb-1">До лидера</div>
                      <div className="text-lg font-bold text-purple-700">
                        -{selectedPeriod === 'week' ? '4.8' : selectedPeriod === 'month' ? '6.8' : selectedPeriod === 'quarter' ? '7.9' : '8.3'}%
                      </div>
                      <div className="text-xs text-slate-500">разрыв с лучшими</div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* North Star блок */}
            <Card className="p-4 border-2 border-dashed border-emerald-300 bg-emerald-50">
              <CardTitle className="flex items-center gap-2 mb-4">
                <Icon name="Star" size={16} className="text-emerald-600" />
                North Star Метрика
              </CardTitle>
              
              <div className="text-center py-4">
                <Icon name="Plus" size={24} className="text-emerald-400 mb-2 mx-auto" />
                <div className="text-sm font-semibold text-emerald-800 mb-1">
                  Выберите ключевую метрику
                </div>
                <div className="text-xs text-emerald-600 mb-3">
                  Добавьте главный показатель для отслеживания успеха
                </div>
                <Button size="sm" className="bg-emerald-600 hover:bg-emerald-700 text-white text-xs">
                  <Icon name="Plus" size={12} className="mr-1" />
                  Add (Free)
                </Button>
              </div>
            </Card>
          </div>

          {/* Блоки лояльности, перенесенные из вкладки "Лояльность" */}
          <div className="border-t border-slate-200 pt-6 mt-8">
            <div className="flex items-center gap-3 mb-6 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border-l-4 border-blue-500">
              <Icon name="Heart" size={24} className="text-blue-600" />
              <div>
                <h2 className="text-xl font-bold text-blue-900">Анализ клиентского поведения</h2>
                <p className="text-sm text-blue-700">Показатели приверженности и долгосрочного взаимодействия</p>
              </div>
            </div>
            
            {/* Ключевые метрики лояльности */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              {/* Частота покупок */}
              <Card className="hover-scale transition-all duration-300 bg-gradient-to-br from-blue-50 to-indigo-100 border-0 shadow-lg">
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center justify-between text-sm font-medium">
                    <div className="flex items-center gap-2">
                      <Icon name="RotateCcw" size={16} />
                      Частота покупок
                    </div>
                    <div className="relative group">
                      <Icon name="HelpCircle" size={14} className="text-slate-400 hover:text-slate-600 cursor-help" />
                      <div className="absolute right-0 top-5 w-56 p-3 bg-slate-800 text-white text-xs rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity z-10 pointer-events-none">
                        <div className="font-semibold mb-1">Методология расчета:</div>
                        <div>Среднее количество покупок на одного клиента за выбранный период, рассчитанное на основе данных эквайринга.</div>
                      </div>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xl font-bold text-blue-700">
                        {purchaseFrequencyData[selectedPeriod as keyof typeof purchaseFrequencyData].value}
                      </span>
                      <Badge variant="default" className="bg-blue-600 text-xs">
                        {purchaseFrequencyData[selectedPeriod as keyof typeof purchaseFrequencyData].change}
                      </Badge>
                    </div>

                    <div className="text-xs text-slate-600">
                      <Badge variant="outline" className="text-xs">
                        {purchaseFrequencyData[selectedPeriod as keyof typeof purchaseFrequencyData].vsCompetitors.value} {purchaseFrequencyData[selectedPeriod as keyof typeof purchaseFrequencyData].vsCompetitors.description}
                      </Badge>
                    </div>
                    
                    {/* Мини график */}
                    <div className="flex items-end gap-1 h-8">
                      {purchaseFrequencyData[selectedPeriod as keyof typeof purchaseFrequencyData].trend.map((point, index) => {
                        const maxValue = Math.max(...purchaseFrequencyData[selectedPeriod as keyof typeof purchaseFrequencyData].trend);
                        const normalizedHeight = (point / maxValue) * 100;
                        return (
                          <div
                            key={index}
                            className="bg-gradient-to-t from-blue-500 to-indigo-300 rounded-t-sm"
                            style={{ height: `${Math.max(normalizedHeight, 10)}%`, width: '10px' }}
                          />
                        );
                      })}
                    </div>

                    <div className="text-xs text-slate-500">
                      {selectedPeriod === 'week' ? 'покупок в неделю' : 
                       selectedPeriod === 'month' ? 'покупок в месяц' : 
                       selectedPeriod === 'quarter' ? 'покупок в квартал' : 'покупок в год'}
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Life Time */}
              <Card className="hover-scale transition-all duration-300 bg-gradient-to-br from-purple-50 to-violet-100 border-0 shadow-lg">
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center justify-between text-sm font-medium">
                    <div className="flex items-center gap-2">
                      <Icon name="Clock" size={16} />
                      Life Time
                    </div>
                    <div className="relative group">
                      <Icon name="HelpCircle" size={14} className="text-slate-400 hover:text-slate-600 cursor-help" />
                      <div className="absolute right-0 top-5 w-56 p-3 bg-slate-800 text-white text-xs rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity z-10 pointer-events-none">
                        <div className="font-semibold mb-1">Методология расчета:</div>
                        <div>Средний период от первой до последней покупки клиента, рассчитанный на основе исторических данных транзакций.</div>
                      </div>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xl font-bold text-purple-700">
                        {lifeTimeData[selectedPeriod as keyof typeof lifeTimeData].value}
                      </span>
                      <Badge variant="default" className="bg-purple-600 text-xs">
                        {lifeTimeData[selectedPeriod as keyof typeof lifeTimeData].change}
                      </Badge>
                    </div>

                    <div className="text-xs text-slate-600">
                      <Badge variant="outline" className="text-xs">
                        {lifeTimeData[selectedPeriod as keyof typeof lifeTimeData].vsCompetitors.value} {lifeTimeData[selectedPeriod as keyof typeof lifeTimeData].vsCompetitors.description}
                      </Badge>
                    </div>
                    
                    {/* Мини график */}
                    <div className="flex items-end gap-1 h-8">
                      {lifeTimeData[selectedPeriod as keyof typeof lifeTimeData].trend.map((point, index) => {
                        const maxValue = Math.max(...lifeTimeData[selectedPeriod as keyof typeof lifeTimeData].trend);
                        const normalizedHeight = (point / maxValue) * 100;
                        return (
                          <div
                            key={index}
                            className="bg-gradient-to-t from-purple-500 to-violet-300 rounded-t-sm"
                            style={{ height: `${Math.max(normalizedHeight, 10)}%`, width: '10px' }}
                          />
                        );
                      })}
                    </div>

                    <div className="text-xs text-slate-500">
                      средний срок жизни клиента
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* LTV */}
              <Card className="hover-scale transition-all duration-300 bg-gradient-to-br from-emerald-50 to-green-100 border-0 shadow-lg">
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center justify-between text-sm font-medium">
                    <div className="flex items-center gap-2">
                      <Icon name="DollarSign" size={16} />
                      LTV
                    </div>
                    <div className="relative group">
                      <Icon name="HelpCircle" size={14} className="text-slate-400 hover:text-slate-600 cursor-help" />
                      <div className="absolute right-0 top-5 w-56 p-3 bg-slate-800 text-white text-xs rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity z-10 pointer-events-none">
                        <div className="font-semibold mb-1">Методология расчета:</div>
                        <div>Lifetime Value - общая выручка от клиента за весь период взаимодействия, рассчитанная как произведение среднего чека на частоту покупок и срок жизни.</div>
                      </div>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xl font-bold text-emerald-700">
                        {ltvData[selectedPeriod as keyof typeof ltvData].value}
                      </span>
                      <Badge variant="default" className="bg-emerald-600 text-xs">
                        {ltvData[selectedPeriod as keyof typeof ltvData].change}
                      </Badge>
                    </div>

                    <div className="text-xs text-slate-600">
                      <Badge variant="outline" className="text-xs">
                        {ltvData[selectedPeriod as keyof typeof ltvData].vsCompetitors.value} {ltvData[selectedPeriod as keyof typeof ltvData].vsCompetitors.description}
                      </Badge>
                    </div>
                    
                    {/* Мини график */}
                    <div className="flex items-end gap-1 h-8">
                      {ltvData[selectedPeriod as keyof typeof ltvData].trend.map((point, index) => {
                        const maxValue = Math.max(...ltvData[selectedPeriod as keyof typeof ltvData].trend);
                        const normalizedHeight = (point / maxValue) * 100;
                        return (
                          <div
                            key={index}
                            className="bg-gradient-to-t from-emerald-500 to-green-300 rounded-t-sm"
                            style={{ height: `${Math.max(normalizedHeight, 10)}%`, width: '10px' }}
                          />
                        );
                      })}
                    </div>

                    <div className="text-xs text-slate-500">
                      выручка на одного клиента
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Детальная аналитика лояльности */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
              {/* Развернутый анализ частоты */}
              <Card className="p-6">
                <CardTitle className="flex items-center gap-2 mb-6">
                  <Icon name="BarChart3" size={20} />
                  Детализация частоты покупок
                </CardTitle>
                
                <div className="space-y-4">
                  <div className="bg-blue-50 rounded-lg p-4">
                    <div className="text-sm text-slate-600 mb-2">Текущий период ({selectedPeriod === 'week' ? 'неделя' : selectedPeriod === 'month' ? 'месяц' : selectedPeriod === 'quarter' ? 'квартал' : 'год'})</div>
                    <div className="text-2xl font-bold text-blue-700 mb-1">
                      {purchaseFrequencyData[selectedPeriod as keyof typeof purchaseFrequencyData].value} покупок
                    </div>
                    <div className="text-sm text-slate-600">
                      Каждый клиент в среднем совершает {purchaseFrequencyData[selectedPeriod as keyof typeof purchaseFrequencyData].value} покупки за выбранный период
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-3 bg-slate-50 rounded-lg">
                      <div className="text-lg font-bold text-slate-900">
                        {purchaseFrequencyData[selectedPeriod as keyof typeof purchaseFrequencyData].vsCompetitors.value}
                      </div>
                      <div className="text-xs text-slate-600">преимущество</div>
                    </div>
                    <div className="text-center p-3 bg-slate-50 rounded-lg">
                      <div className="text-lg font-bold text-slate-900">
                        {purchaseFrequencyData[selectedPeriod as keyof typeof purchaseFrequencyData].change}
                      </div>
                      <div className="text-xs text-slate-600">рост к прошлому</div>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Развернутый анализ LTV */}
              <Card className="p-6">
                <CardTitle className="flex items-center gap-2 mb-6">
                  <Icon name="TrendingUp" size={20} />
                  Анализ жизненной ценности
                </CardTitle>
                
                <div className="space-y-4">
                  <div className="bg-emerald-50 rounded-lg p-4">
                    <div className="text-sm text-slate-600 mb-2">Lifetime Value</div>
                    <div className="text-2xl font-bold text-emerald-700 mb-1">
                      {ltvData[selectedPeriod as keyof typeof ltvData].value}
                    </div>
                    <div className="text-sm text-slate-600">
                      Средняя выручка с одного клиента за период {lifeTimeData[selectedPeriod as keyof typeof lifeTimeData].value}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-3 bg-slate-50 rounded-lg">
                      <div className="text-lg font-bold text-slate-900">
                        {ltvData[selectedPeriod as keyof typeof ltvData].vsCompetitors.value}
                      </div>
                      <div className="text-xs text-slate-600">vs конкуренты</div>
                    </div>
                    <div className="text-center p-3 bg-slate-50 rounded-lg">
                      <div className="text-lg font-bold text-slate-900">
                        {lifeTimeData[selectedPeriod as keyof typeof lifeTimeData].value}
                      </div>
                      <div className="text-xs text-slate-600">время жизни</div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            {/* Сводка по лояльности */}
            <Card className="p-6 bg-gradient-to-br from-indigo-50 to-purple-50">
              <CardTitle className="flex items-center gap-2 mb-6">
                <Icon name="Award" size={20} />
                Индекс лояльности клиентов
              </CardTitle>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-indigo-600 mb-2">89%</div>
                  <div className="text-sm text-slate-600 font-medium">Общий индекс лояльности</div>
                  <div className="text-xs text-slate-500 mt-1">+12% к прошлому периоду</div>
                </div>
                
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">76%</div>
                  <div className="text-sm text-slate-600 font-medium">Возвращающиеся клиенты</div>
                  <div className="text-xs text-slate-500 mt-1">+8% к прошлому периоду</div>
                </div>
                
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">4.7</div>
                  <div className="text-sm text-slate-600 font-medium">NPS Score</div>
                  <div className="text-xs text-slate-500 mt-1">+0.3 к прошлому периоду</div>
                </div>
                
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">68%</div>
                  <div className="text-sm text-slate-600 font-medium">Рекомендующие клиенты</div>
                  <div className="text-xs text-slate-500 mt-1">+15% к прошлому периоду</div>
                </div>
              </div>
            </Card>
          </div>
        </TabsContent>

        {/* Лояльность */}
        <TabsContent value="loyalty" className="space-y-6">
          <div className="flex items-center gap-3 mb-6 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border-l-4 border-blue-500">
            <Icon name="Heart" size={24} className="text-blue-600" />
            <div>
              <h2 className="text-xl font-bold text-blue-900">Анализ лояльности клиентов</h2>
              <p className="text-sm text-blue-700">Вкладка временно пуста - контент перенесён в раздел "Клиенты"</p>
            </div>
          </div>
        </TabsContent>

        {/* Кошелек клиента */}
        <TabsContent value="wallet" className="space-y-6">
          <div className="flex items-center gap-3 mb-6 p-4 bg-gradient-to-r from-orange-50 to-red-50 rounded-xl border-l-4 border-orange-500">
            <Icon name="Wallet" size={24} className="text-orange-600" />
            <div>
              <h2 className="text-xl font-bold text-orange-900">Кошелек клиента</h2>
              <p className="text-sm text-orange-700">Анализ доли трат и позиции в сегменте</p>
            </div>
          </div>

          {/* Главные выводы по кошельку клиента */}
          <Card className="p-5 bg-gradient-to-r from-amber-50 to-orange-50 border-2 border-amber-200 mb-6">
            <div className="flex items-center gap-2 mb-3">
              <Icon name="Target" size={18} className="text-amber-600" />
              <h3 className="font-bold text-amber-800">Ключевые изменения позиции в кошельке клиента</h3>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-1.5 flex-shrink-0"></div>
                <div>
                  <span className="font-semibold text-green-700">Растёт доля премиум-трат:</span>
                  <span className="text-slate-700 ml-1">40% клиентских расходов приходится на рестораны премиум-класса (+12% за период), при этом фастфуд снижается до 30% — сдвиг к качественному потреблению</span>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-orange-500 rounded-full mt-1.5 flex-shrink-0"></div>
                <div>
                  <span className="font-semibold text-orange-700">Укрепляется позиция компании:</span>
                  <span className="text-slate-700 ml-1">Наша доля в кошельке клиента составляет 23.5% от всех трат в сегменте "питание вне дома" (+3.2% за период) — опережаем конкурентов по захвату большей части бюджета</span>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-purple-500 rounded-full mt-1.5 flex-shrink-0"></div>
                <div>
                  <span className="font-semibold text-purple-700">Возможность роста доли:</span>
                  <span className="text-slate-700 ml-1">Средний клиент тратит 30,000₽/месяц на питание вне дома, из них только 7,050₽ у нас — есть потенциал увеличить долю до 35% через персонализацию и расширение предложения</span>
                </div>
              </div>
            </div>
          </Card>
          {/* Ключевые метрики кошелька */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Траты в сегменте */}
            <Card className="hover-scale transition-all duration-300 bg-gradient-to-br from-orange-50 to-red-100 border-0 shadow-lg">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2 text-sm font-medium">
                  <Icon name="PieChart" size={16} />
                  Траты в сегменте
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-orange-700">
                      {walletData[selectedPeriod as keyof typeof walletData].segmentSpending.value}
                    </span>
                    <Badge variant="default" className="bg-orange-600 text-xs">
                      {walletData[selectedPeriod as keyof typeof walletData].segmentSpending.change}
                    </Badge>
                  </div>

                  {/* Мини график */}
                  <div className="flex items-end gap-1 h-8">
                    {walletData[selectedPeriod as keyof typeof walletData].segmentSpending.trend.map((point, index) => {
                      const maxValue = Math.max(...walletData[selectedPeriod as keyof typeof walletData].segmentSpending.trend);
                      const normalizedHeight = (point / maxValue) * 100;
                      return (
                        <div
                          key={index}
                          className="bg-gradient-to-t from-orange-500 to-red-300 rounded-t-sm"
                          style={{ height: `${Math.max(normalizedHeight, 10)}%`, width: '10px' }}
                        />
                      );
                    })}
                  </div>

                  <div className="text-xs text-slate-500">
                    {selectedPeriod === 'month' ? 'питание вне дома' : 'общий сегмент'} за {selectedPeriod === 'week' ? 'неделю' : selectedPeriod === 'month' ? 'месяц' : selectedPeriod === 'quarter' ? 'квартал' : 'год'}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Траты в компании */}
            <Card className="hover-scale transition-all duration-300 bg-gradient-to-br from-green-50 to-emerald-100 border-0 shadow-lg">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2 text-sm font-medium">
                  <Icon name="Building2" size={16} />
                  Траты в компании
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-green-700">
                      {walletData[selectedPeriod as keyof typeof walletData].companySpending.value}
                    </span>
                    <Badge variant="default" className="bg-green-600 text-xs">
                      {walletData[selectedPeriod as keyof typeof walletData].companySpending.change}
                    </Badge>
                  </div>

                  {/* Мини график */}
                  <div className="flex items-end gap-1 h-8">
                    {walletData[selectedPeriod as keyof typeof walletData].companySpending.trend.map((point, index) => {
                      const maxValue = Math.max(...walletData[selectedPeriod as keyof typeof walletData].companySpending.trend);
                      const normalizedHeight = (point / maxValue) * 100;
                      return (
                        <div
                          key={index}
                          className="bg-gradient-to-t from-green-500 to-emerald-300 rounded-t-sm"
                          style={{ height: `${Math.max(normalizedHeight, 10)}%`, width: '10px' }}
                        />
                      );
                    })}
                  </div>

                  <div className="text-xs text-slate-500">
                    траты в нашей компании за {selectedPeriod === 'week' ? 'неделю' : selectedPeriod === 'month' ? 'месяц' : selectedPeriod === 'quarter' ? 'квартал' : 'год'}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Доля кошелька */}
            <Card className="hover-scale transition-all duration-300 bg-gradient-to-br from-violet-50 to-purple-100 border-0 shadow-lg">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2 text-sm font-medium">
                  <Icon name="Target" size={16} />
                  Доля кошелька
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-violet-700">
                      {walletData[selectedPeriod as keyof typeof walletData].shareInWallet.value}
                    </span>
                    <Badge variant="default" className="bg-violet-600 text-xs">
                      {walletData[selectedPeriod as keyof typeof walletData].shareInWallet.change}
                    </Badge>
                  </div>

                  {/* Круговая диаграмма */}
                  <div className="relative w-16 h-16 mx-auto">
                    <div className="absolute inset-0 rounded-full bg-slate-200"></div>
                    <div 
                      className="absolute inset-0 rounded-full bg-gradient-to-br from-violet-500 to-purple-400"
                      style={{
                        background: `conic-gradient(from 0deg, #8b5cf6 0deg, #8b5cf6 ${parseFloat(walletData[selectedPeriod as keyof typeof walletData].shareInWallet.value) * 3.6}deg, #e2e8f0 ${parseFloat(walletData[selectedPeriod as keyof typeof walletData].shareInWallet.value) * 3.6}deg, #e2e8f0 360deg)`
                      }}
                    ></div>
                    <div className="absolute inset-2 rounded-full bg-white flex items-center justify-center">
                      <span className="text-xs font-bold text-violet-700">{walletData[selectedPeriod as keyof typeof walletData].shareInWallet.value}</span>
                    </div>
                  </div>

                  <div className="text-xs text-slate-500 text-center">
                    от всех трат в сегменте
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Динамика доли */}
            <Card className="hover-scale transition-all duration-300 bg-gradient-to-br from-teal-50 to-cyan-100 border-0 shadow-lg">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2 text-sm font-medium">
                  <Icon name="TrendingUp" size={16} />
                  Динамика доли
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-teal-700">
                      {walletData[selectedPeriod as keyof typeof walletData].shareInWallet.change}
                    </span>
                    <Badge variant="default" className="bg-teal-600 text-xs">
                      рост
                    </Badge>
                  </div>

                  {/* Линейный график */}
                  <div className="flex items-end gap-1 h-8">
                    {walletData[selectedPeriod as keyof typeof walletData].dynamicsTrend.map((point, index) => {
                      const maxValue = Math.max(...walletData[selectedPeriod as keyof typeof walletData].dynamicsTrend);
                      const normalizedHeight = (point / maxValue) * 100;
                      return (
                        <div
                          key={index}
                          className="bg-gradient-to-t from-teal-500 to-cyan-300 rounded-t-sm"
                          style={{ height: `${Math.max(normalizedHeight, 10)}%`, width: '10px' }}
                        />
                      );
                    })}
                  </div>

                  <div className="text-xs text-slate-500">
                    изменение за 7 периодов
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Детальный анализ кошелька */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Структура трат в сегменте */}
            <Card className="p-6">
              <CardTitle className="flex items-center gap-2 mb-6">
                <Icon name="BarChart4" size={20} />
                Структура трат в сегменте "Питание вне дома"
              </CardTitle>
              
              <div className="space-y-4">
                <div className="bg-orange-50 rounded-lg p-4">
                  <div className="text-sm text-slate-600 mb-2">Общие траты клиента в сегменте</div>
                  <div className="text-2xl font-bold text-orange-700 mb-1">
                    {walletData[selectedPeriod as keyof typeof walletData].segmentSpending.value}
                  </div>
                  <div className="text-sm text-slate-600">
                    Средний клиент тратит на питание вне дома за {selectedPeriod === 'week' ? 'неделю' : selectedPeriod === 'month' ? 'месяц' : selectedPeriod === 'quarter' ? 'квартал' : 'год'}
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-slate-50 rounded-lg">
                    <span className="text-sm font-medium">Рестораны премиум</span>
                    <div className="text-right">
                      <div className="font-bold text-slate-900">{selectedPeriod === 'month' ? '12,000₽' : selectedPeriod === 'week' ? '3,000₽' : selectedPeriod === 'quarter' ? '37,000₽' : '154,000₽'}</div>
                      <div className="text-xs text-slate-600">40%</div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-slate-50 rounded-lg">
                    <span className="text-sm font-medium">Фастфуд сети</span>
                    <div className="text-right">
                      <div className="font-bold text-slate-900">{selectedPeriod === 'month' ? '9,000₽' : selectedPeriod === 'week' ? '2,250₽' : selectedPeriod === 'quarter' ? '27,750₽' : '115,500₽'}</div>
                      <div className="text-xs text-slate-600">30%</div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-slate-50 rounded-lg">
                    <span className="text-sm font-medium">Кафе и бары</span>
                    <div className="text-right">
                      <div className="font-bold text-slate-900">{selectedPeriod === 'month' ? '6,000₽' : selectedPeriod === 'week' ? '1,500₽' : selectedPeriod === 'quarter' ? '18,500₽' : '77,000₽'}</div>
                      <div className="text-xs text-slate-600">20%</div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-slate-50 rounded-lg">
                    <span className="text-sm font-medium">Доставка еды</span>
                    <div className="text-right">
                      <div className="font-bold text-slate-900">{selectedPeriod === 'month' ? '3,000₽' : selectedPeriod === 'week' ? '750₽' : selectedPeriod === 'quarter' ? '9,250₽' : '38,500₽'}</div>
                      <div className="text-xs text-slate-600">10%</div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Анализ доли в кошельке */}
            <Card className="p-6">
              <CardTitle className="flex items-center gap-2 mb-6">
                <Icon name="PieChart" size={20} />
                Позиция компании в кошельке клиента
              </CardTitle>
              
              <div className="space-y-4">
                <div className="bg-violet-50 rounded-lg p-4">
                  <div className="text-sm text-slate-600 mb-2">Доля нашей компании</div>
                  <div className="text-2xl font-bold text-violet-700 mb-1">
                    {walletData[selectedPeriod as keyof typeof walletData].shareInWallet.value}
                  </div>
                  <div className="text-sm text-slate-600">
                    {walletData[selectedPeriod as keyof typeof walletData].companySpending.value} из {walletData[selectedPeriod as keyof typeof walletData].segmentSpending.value} всех трат в сегменте
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-3 bg-green-50 rounded-lg">
                    <div className="text-lg font-bold text-green-700">
                      {walletData[selectedPeriod as keyof typeof walletData].companySpending.change}
                    </div>
                    <div className="text-xs text-slate-600">рост трат в компании</div>
                  </div>
                  <div className="text-center p-3 bg-blue-50 rounded-lg">
                    <div className="text-lg font-bold text-blue-700">
                      {walletData[selectedPeriod as keyof typeof walletData].shareInWallet.change}
                    </div>
                    <div className="text-xs text-slate-600">рост доли кошелька</div>
                  </div>
                </div>

                <div className="bg-slate-50 rounded-lg p-4">
                  <div className="text-sm font-medium text-slate-700 mb-2">Конкуренты в кошельке:</div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Конкурент А</span>
                      <span className="font-medium">{selectedPeriod === 'month' ? '28.5%' : '28.2%'}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Конкурент Б</span>
                      <span className="font-medium">{selectedPeriod === 'month' ? '22.1%' : '22.8%'}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Прочие</span>
                      <span className="font-medium">{selectedPeriod === 'month' ? '15.4%' : '15.7%'}</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Сводка по кошельку */}
          <Card className="p-6 bg-gradient-to-br from-amber-50 to-orange-50">
            <CardTitle className="flex items-center gap-2 mb-6">
              <Icon name="Wallet" size={20} />
              Анализ позиции в кошельке клиента
            </CardTitle>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-600 mb-2">
                  {walletData[selectedPeriod as keyof typeof walletData].shareInWallet.value}
                </div>
                <div className="text-sm text-slate-600 font-medium">Доля в кошельке</div>
                <div className="text-xs text-slate-500 mt-1">{walletData[selectedPeriod as keyof typeof walletData].shareInWallet.change} к прошлому периоду</div>
              </div>
              
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">2-е</div>
                <div className="text-sm text-slate-600 font-medium">Место среди конкурентов</div>
                <div className="text-xs text-slate-500 mt-1">+1 позиция</div>
              </div>
              
              <div className="text-center">
                <div className="text-3xl font-bold text-red-600 mb-2">85%</div>
                <div className="text-sm text-slate-600 font-medium">Удержание клиентов</div>
                <div className="text-xs text-slate-500 mt-1">+3% к прошлому периоду</div>
              </div>
              
              <div className="text-center">
                <div className="text-3xl font-bold text-pink-600 mb-2">+12%</div>
                <div className="text-sm text-slate-600 font-medium">Прирост доли</div>
                <div className="text-xs text-slate-500 mt-1">опережает рынок</div>
              </div>
            </div>
          </Card>
        </TabsContent>

        {/* Рынок */}
        <TabsContent value="market" className="space-y-6">
          <div className="flex items-center gap-3 mb-6 p-4 bg-gradient-to-r from-red-50 to-pink-50 rounded-xl border-l-4 border-red-500">
            <Icon name="BarChart2" size={24} className="text-red-600" />
            <div>
              <h2 className="text-xl font-bold text-red-900">Рыночная позиция</h2>
              <p className="text-sm text-red-700">Анализ доли рынка и темпов роста сегмента</p>
            </div>
          </div>

          {/* Рыночная доля */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            <Card className="p-6 bg-gradient-to-br from-red-50 to-orange-50">
              <CardTitle className="flex items-center gap-2 mb-6">
                <Icon name="PieChart" size={20} className="text-red-600" />
                Рыночная доля
              </CardTitle>
              
              <div className="space-y-6">
                {/* Основные показатели */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-white rounded-lg border">
                    <div className="text-3xl font-bold text-red-600 mb-2">
                      {marketShareData[selectedPeriod as keyof typeof marketShareData].ourShare.value}
                    </div>
                    <div className="text-sm text-slate-600 font-medium">Наша доля</div>
                    <div className="text-xs text-red-600 mt-1">
                      {marketShareData[selectedPeriod as keyof typeof marketShareData].ourShare.change}
                    </div>
                  </div>
                  
                  <div className="text-center p-4 bg-white rounded-lg border">
                    <div className="text-3xl font-bold text-slate-700 mb-2">
                      {marketShareData[selectedPeriod as keyof typeof marketShareData].totalMarketSize.value}
                    </div>
                    <div className="text-sm text-slate-600 font-medium">Размер рынка</div>
                    <div className="text-xs text-green-600 mt-1">
                      {marketShareData[selectedPeriod as keyof typeof marketShareData].totalMarketSize.change}
                    </div>
                  </div>
                </div>

                {/* Позиция среди конкурентов */}
                <div className="bg-white rounded-lg p-4 border">
                  <div className="flex items-center gap-2 mb-3">
                    <Icon name="Trophy" size={16} className="text-amber-500" />
                    <span className="font-semibold text-slate-700">Позиция: {marketShareData[selectedPeriod as keyof typeof marketShareData].position.value}</span>
                    <Badge variant="outline" className="text-xs">
                      {marketShareData[selectedPeriod as keyof typeof marketShareData].position.change}
                    </Badge>
                  </div>
                  
                  <div className="space-y-2">
                    {marketShareData[selectedPeriod as keyof typeof marketShareData].position.competitors.map((competitor, index) => (
                      <div key={index} className={`flex items-center justify-between p-2 rounded text-sm ${index === 1 ? 'bg-red-50 border border-red-200' : 'bg-slate-50'}`}>
                        <span className={`${index === 1 ? 'font-semibold text-red-700' : 'text-slate-600'}`}>
                          {index + 1}. {competitor.split(' (')[0]}
                        </span>
                        <span className={`font-medium ${index === 1 ? 'text-red-600' : 'text-slate-500'}`}>
                          {competitor.match(/\((.*?)\)/)?.[1]}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Тренд доли */}
                <div className="bg-white rounded-lg p-4 border">
                  <div className="text-sm font-medium text-slate-700 mb-3">Динамика доли рынка</div>
                  <div className="flex items-end gap-1 h-12">
                    {marketShareData[selectedPeriod as keyof typeof marketShareData].ourShare.trend.map((point, index) => {
                      const maxValue = Math.max(...marketShareData[selectedPeriod as keyof typeof marketShareData].ourShare.trend);
                      const normalizedHeight = (point / maxValue) * 100;
                      return (
                        <div
                          key={index}
                          className="bg-gradient-to-t from-red-500 to-pink-400 rounded-t-sm"
                          style={{ height: `${Math.max(normalizedHeight, 15)}%`, width: '12px' }}
                        />
                      );
                    })}
                  </div>
                  <div className="text-xs text-slate-500 mt-2">
                    Рост {marketShareData[selectedPeriod as keyof typeof marketShareData].ourShare.change} за {selectedPeriod === 'week' ? 'неделю' : selectedPeriod === 'month' ? 'месяц' : selectedPeriod === 'quarter' ? 'квартал' : 'год'}
                  </div>
                </div>
              </div>
            </Card>

            {/* Темпы роста рынка */}
            <Card className="p-6 bg-gradient-to-br from-purple-50 to-indigo-50">
              <CardTitle className="flex items-center gap-2 mb-6">
                <Icon name="TrendingUp" size={20} className="text-purple-600" />
                Темпы роста рынка
              </CardTitle>
              
              <div className="space-y-6">
                {/* Сравнение роста */}
                <div className="grid grid-cols-1 gap-4">
                  <div className="text-center p-4 bg-white rounded-lg border">
                    <div className="text-3xl font-bold text-purple-600 mb-2">
                      {marketGrowthData[selectedPeriod as keyof typeof marketGrowthData].overallGrowth.value}
                    </div>
                    <div className="text-sm text-slate-600 font-medium">Рост всего рынка</div>
                    <div className="text-xs text-slate-500 mt-1">
                      {marketGrowthData[selectedPeriod as keyof typeof marketGrowthData].overallGrowth.description}
                    </div>
                  </div>
                  
                  <div className="text-center p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg border border-green-200">
                    <div className="text-3xl font-bold text-green-600 mb-2">
                      {marketGrowthData[selectedPeriod as keyof typeof marketGrowthData].ourGrowth.value}
                    </div>
                    <div className="text-sm text-slate-600 font-medium">Наш рост</div>
                    <div className="text-xs text-green-600 mt-1 font-medium">
                      Опережаем рынок на {(parseFloat(marketGrowthData[selectedPeriod as keyof typeof marketGrowthData].ourGrowth.value) - parseFloat(marketGrowthData[selectedPeriod as keyof typeof marketGrowthData].overallGrowth.value)).toFixed(1)}%
                    </div>
                  </div>
                </div>

                {/* Прогноз */}
                <div className="bg-white rounded-lg p-4 border">
                  <div className="flex items-center gap-2 mb-3">
                    <Icon name="Crystal" size={16} className="text-indigo-500" />
                    <span className="font-semibold text-slate-700">Прогноз роста</span>
                  </div>
                  <div className="text-2xl font-bold text-indigo-600 mb-2">
                    {marketGrowthData[selectedPeriod as keyof typeof marketGrowthData].forecast.value}
                  </div>
                  <div className="text-sm text-slate-600">
                    {marketGrowthData[selectedPeriod as keyof typeof marketGrowthData].forecast.description}
                  </div>
                  <div className="text-xs text-slate-500 mt-2">
                    Сегмент: {marketGrowthData[selectedPeriod as keyof typeof marketGrowthData].forecast.segment}
                  </div>
                </div>

                {/* Тренд роста рынка */}
                <div className="bg-white rounded-lg p-4 border">
                  <div className="text-sm font-medium text-slate-700 mb-3">Динамика роста рынка vs наш рост</div>
                  <div className="space-y-3">
                    <div>
                      <div className="text-xs text-slate-500 mb-1">Рост рынка</div>
                      <div className="flex items-end gap-1 h-8">
                        {marketGrowthData[selectedPeriod as keyof typeof marketGrowthData].overallGrowth.trend.map((point, index) => {
                          const maxValue = Math.max(...marketGrowthData[selectedPeriod as keyof typeof marketGrowthData].overallGrowth.trend);
                          const normalizedHeight = (point / maxValue) * 100;
                          return (
                            <div
                              key={index}
                              className="bg-gradient-to-t from-purple-500 to-purple-300 rounded-t-sm"
                              style={{ height: `${Math.max(normalizedHeight, 15)}%`, width: '10px' }}
                            />
                          );
                        })}
                      </div>
                    </div>
                    
                    <div>
                      <div className="text-xs text-slate-500 mb-1">Наш рост</div>
                      <div className="flex items-end gap-1 h-8">
                        {marketGrowthData[selectedPeriod as keyof typeof marketGrowthData].ourGrowth.trend.map((point, index) => {
                          const maxValue = Math.max(...marketGrowthData[selectedPeriod as keyof typeof marketGrowthData].ourGrowth.trend);
                          const normalizedHeight = (point / maxValue) * 100;
                          return (
                            <div
                              key={index}
                              className="bg-gradient-to-t from-green-500 to-green-300 rounded-t-sm"
                              style={{ height: `${Math.max(normalizedHeight, 15)}%`, width: '10px' }}
                            />
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Ключевые выводы по рынку */}
          <Card className="p-5 bg-gradient-to-r from-red-50 to-pink-50 border-2 border-red-200">
            <div className="flex items-center gap-2 mb-3">
              <Icon name="Target" size={18} className="text-red-600" />
              <h3 className="font-bold text-red-800">Ключевые изменения рыночной позиции</h3>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-1.5 flex-shrink-0"></div>
                <div>
                  <span className="font-semibold text-green-700">Опережаем рынок по росту:</span>
                  <span className="text-slate-700 ml-1">Наш рост {marketGrowthData[selectedPeriod as keyof typeof marketGrowthData].ourGrowth.value} против {marketGrowthData[selectedPeriod as keyof typeof marketGrowthData].overallGrowth.value} по рынку — опережение на {(parseFloat(marketGrowthData[selectedPeriod as keyof typeof marketGrowthData].ourGrowth.value) - parseFloat(marketGrowthData[selectedPeriod as keyof typeof marketGrowthData].overallGrowth.value)).toFixed(1)}% позволяет увеличивать долю рынка</span>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-1.5 flex-shrink-0"></div>
                <div>
                  <span className="font-semibold text-blue-700">Укрепляем позиции среди лидеров:</span>
                  <span className="text-slate-700 ml-1">Поднялись с {selectedPeriod === 'year' ? '4-го' : '3-го'} на {marketShareData[selectedPeriod as keyof typeof marketShareData].position.value}, доля выросла до {marketShareData[selectedPeriod as keyof typeof marketShareData].ourShare.value} — стратегия работает эффективнее конкурентов</span>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-purple-500 rounded-full mt-1.5 flex-shrink-0"></div>
                <div>
                  <span className="font-semibold text-purple-700">Растущий рынок создаёт возможности:</span>
                  <span className="text-slate-700 ml-1">Сегмент "питание вне дома" растёт на {marketGrowthData[selectedPeriod as keyof typeof marketGrowthData].overallGrowth.value} ({marketGrowthData[selectedPeriod as keyof typeof marketGrowthData].totalMarketSize?.value || marketShareData[selectedPeriod as keyof typeof marketShareData].totalMarketSize.value}) — есть пространство для дальнейшего роста без прямой конкуренции за существующих клиентов</span>
                </div>
              </div>
            </div>
          </Card>

          {/* Анализ рыночного потенциала PAM, TAM, SAM, SOM */}
          <Card className="p-6 bg-gradient-to-br from-emerald-50 to-green-50">
            <CardTitle className="flex items-center gap-2 mb-6">
              <Icon name="Calculator" size={20} className="text-emerald-600" />
              Анализ рыночного потенциала
            </CardTitle>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* PAM и TAM */}
              <div className="space-y-4">
                {/* PAM */}
                <div className="bg-white rounded-lg p-5 border-2 border-emerald-200">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 bg-emerald-600 text-white rounded-lg flex items-center justify-center font-bold text-sm">
                      PAM
                    </div>
                    <div>
                      <h4 className="font-bold text-emerald-800">Потенциально доступный рынок</h4>
                      <p className="text-xs text-slate-600">Максимальный объём рынка с учётом роста</p>
                    </div>
                  </div>
                  
                  <div className="text-3xl font-bold text-emerald-700 mb-3">
                    {marketSizeData[selectedPeriod as keyof typeof marketSizeData].PAM.value}
                  </div>
                  
                  <div className="bg-emerald-50 rounded-lg p-3 mb-3">
                    <div className="text-sm font-medium text-emerald-800 mb-2">Формула расчёта:</div>
                    <div className="text-sm text-emerald-700 font-mono">
                      {marketSizeData[selectedPeriod as keyof typeof marketSizeData].PAM.calculation}
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-2 text-xs">
                    <div className="text-center p-2 bg-slate-50 rounded">
                      <div className="font-semibold text-slate-700">{marketSizeData[selectedPeriod as keyof typeof marketSizeData].PAM.breakdown.clients}</div>
                      <div className="text-slate-500">клиентов</div>
                    </div>
                    <div className="text-center p-2 bg-slate-50 rounded">
                      <div className="font-semibold text-slate-700">{marketSizeData[selectedPeriod as keyof typeof marketSizeData].PAM.breakdown.growth}</div>
                      <div className="text-slate-500">рост</div>
                    </div>
                    <div className="text-center p-2 bg-slate-50 rounded">
                      <div className="font-semibold text-slate-700">{marketSizeData[selectedPeriod as keyof typeof marketSizeData].PAM.breakdown.price}</div>
                      <div className="text-slate-500">средн. чек</div>
                    </div>
                  </div>
                </div>

                {/* TAM */}
                <div className="bg-white rounded-lg p-5 border-2 border-blue-200">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 bg-blue-600 text-white rounded-lg flex items-center justify-center font-bold text-sm">
                      TAM
                    </div>
                    <div>
                      <h4 className="font-bold text-blue-800">Общий адресуемый рынок</h4>
                      <p className="text-xs text-slate-600">Весь возможный рынок без ограничений</p>
                    </div>
                  </div>
                  
                  <div className="text-3xl font-bold text-blue-700 mb-3">
                    {marketSizeData[selectedPeriod as keyof typeof marketSizeData].TAM.value}
                  </div>
                  
                  <div className="bg-blue-50 rounded-lg p-3 mb-3">
                    <div className="text-sm font-medium text-blue-800 mb-2">Формула расчёта:</div>
                    <div className="text-sm text-blue-700 font-mono">
                      {marketSizeData[selectedPeriod as keyof typeof marketSizeData].TAM.calculation}
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="text-center p-2 bg-slate-50 rounded">
                      <div className="font-semibold text-slate-700">{marketSizeData[selectedPeriod as keyof typeof marketSizeData].TAM.breakdown.clients}</div>
                      <div className="text-slate-500">клиентов</div>
                    </div>
                    <div className="text-center p-2 bg-slate-50 rounded">
                      <div className="font-semibold text-slate-700">{marketSizeData[selectedPeriod as keyof typeof marketSizeData].TAM.breakdown.price}</div>
                      <div className="text-slate-500">средн. чек</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* SAM и SOM */}
              <div className="space-y-4">
                {/* SAM */}
                <div className="bg-white rounded-lg p-5 border-2 border-purple-200">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 bg-purple-600 text-white rounded-lg flex items-center justify-center font-bold text-sm">
                      SAM
                    </div>
                    <div>
                      <h4 className="font-bold text-purple-800">Обслуживаемый доступный рынок</h4>
                      <p className="text-xs text-slate-600">Часть TAM с учётом ограничений</p>
                    </div>
                  </div>
                  
                  <div className="text-3xl font-bold text-purple-700 mb-3">
                    {marketSizeData[selectedPeriod as keyof typeof marketSizeData].SAM.value}
                  </div>
                  
                  <div className="bg-purple-50 rounded-lg p-3 mb-3">
                    <div className="text-sm font-medium text-purple-800 mb-2">Формула расчёта:</div>
                    <div className="text-sm text-purple-700 font-mono">
                      {marketSizeData[selectedPeriod as keyof typeof marketSizeData].SAM.calculation}
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-2 text-xs">
                    <div className="text-center p-2 bg-slate-50 rounded">
                      <div className="font-semibold text-slate-700">{marketSizeData[selectedPeriod as keyof typeof marketSizeData].SAM.breakdown.clients}</div>
                      <div className="text-slate-500">клиентов</div>
                    </div>
                    <div className="text-center p-2 bg-slate-50 rounded">
                      <div className="font-semibold text-slate-700">{marketSizeData[selectedPeriod as keyof typeof marketSizeData].SAM.breakdown.segment}</div>
                      <div className="text-slate-500">готовы</div>
                    </div>
                    <div className="text-center p-2 bg-slate-50 rounded">
                      <div className="font-semibold text-slate-700">{marketSizeData[selectedPeriod as keyof typeof marketSizeData].SAM.breakdown.price}</div>
                      <div className="text-slate-500">средн. чек</div>
                    </div>
                  </div>
                </div>

                {/* SOM */}
                <div className="bg-white rounded-lg p-5 border-2 border-orange-200">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 bg-orange-600 text-white rounded-lg flex items-center justify-center font-bold text-sm">
                      SOM
                    </div>
                    <div>
                      <h4 className="font-bold text-orange-800">Реально достижимый рынок</h4>
                      <p className="text-xs text-slate-600">Доля рынка при текущей стратегии</p>
                    </div>
                  </div>
                  
                  <div className="text-3xl font-bold text-orange-700 mb-3">
                    {marketSizeData[selectedPeriod as keyof typeof marketSizeData].SOM.value}
                  </div>
                  
                  <div className="bg-orange-50 rounded-lg p-3 mb-3">
                    <div className="text-sm font-medium text-orange-800 mb-2">Формула расчёта:</div>
                    <div className="text-sm text-orange-700 font-mono">
                      {marketSizeData[selectedPeriod as keyof typeof marketSizeData].SOM.calculation}
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="text-center p-2 bg-slate-50 rounded">
                      <div className="font-semibold text-slate-700">{marketSizeData[selectedPeriod as keyof typeof marketSizeData].SOM.breakdown.share}</div>
                      <div className="text-slate-500">наша доля</div>
                    </div>
                    <div className="text-center p-2 bg-slate-50 rounded">
                      <div className="font-semibold text-slate-700">{marketSizeData[selectedPeriod as keyof typeof marketSizeData].SOM.breakdown.sam}</div>
                      <div className="text-slate-500">от SAM</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Выводы и практическое применение */}
            <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Анализ воронки */}
              <div className="bg-gradient-to-r from-slate-50 to-slate-100 rounded-lg p-5">
                <div className="flex items-center gap-2 mb-4">
                  <Icon name="Funnel" size={18} className="text-slate-600" />
                  <h4 className="font-bold text-slate-800">Воронка рыночного потенциала</h4>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-emerald-100 rounded-lg">
                    <span className="font-semibold text-emerald-800">PAM</span>
                    <span className="text-emerald-700">{marketSizeData[selectedPeriod as keyof typeof marketSizeData].PAM.value}</span>
                  </div>
                  
                  <div className="flex items-center justify-center">
                    <Icon name="ArrowDown" size={16} className="text-slate-400" />
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-blue-100 rounded-lg">
                    <span className="font-semibold text-blue-800">TAM</span>
                    <span className="text-blue-700">{marketSizeData[selectedPeriod as keyof typeof marketSizeData].TAM.value}</span>
                  </div>
                  
                  <div className="flex items-center justify-center">
                    <Icon name="ArrowDown" size={16} className="text-slate-400" />
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-purple-100 rounded-lg">
                    <span className="font-semibold text-purple-800">SAM</span>
                    <span className="text-purple-700">{marketSizeData[selectedPeriod as keyof typeof marketSizeData].SAM.value}</span>
                  </div>
                  
                  <div className="flex items-center justify-center">
                    <Icon name="ArrowDown" size={16} className="text-slate-400" />
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-orange-100 rounded-lg">
                    <span className="font-semibold text-orange-800">SOM</span>
                    <span className="text-orange-700">{marketSizeData[selectedPeriod as keyof typeof marketSizeData].SOM.value}</span>
                  </div>
                </div>
              </div>

              {/* Практическое применение */}
              <div className="bg-gradient-to-r from-emerald-50 to-green-50 rounded-lg p-5">
                <div className="flex items-center gap-2 mb-4">
                  <Icon name="Target" size={18} className="text-emerald-600" />
                  <h4 className="font-bold text-emerald-800">Практическое применение</h4>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <span className="font-semibold text-emerald-700">Оценка потенциала:</span>
                      <p className="text-sm text-slate-700">SOM {marketSizeData[selectedPeriod as keyof typeof marketSizeData].SOM.value} показывает реальные возможности роста при текущей стратегии</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <span className="font-semibold text-blue-700">Привлечение инвестиций:</span>
                      <p className="text-sm text-slate-700">TAM {marketSizeData[selectedPeriod as keyof typeof marketSizeData].TAM.value} демонстрирует инвесторам общий размер возможностей</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <span className="font-semibold text-purple-700">Стратегическое планирование:</span>
                      <p className="text-sm text-slate-700">SAM {marketSizeData[selectedPeriod as keyof typeof marketSizeData].SAM.value} помогает определить реалистичные цели роста</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <span className="font-semibold text-orange-700">Фокус маркетинга:</span>
                      <p className="text-sm text-slate-700">30% готовых клиентов из TAM — ключевой сегмент для концентрации усилий</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </TabsContent>

        {/* Обзор */}
        <TabsContent value="overview" className="space-y-6">
          <div className="flex items-center gap-3 mb-6 p-4 bg-gradient-to-r from-purple-50 to-violet-50 rounded-xl border-l-4 border-purple-500">
            <Icon name="BarChart3" size={24} className="text-purple-600" />
            <div>
              <h2 className="text-xl font-bold text-purple-900">Общий обзор</h2>
              <p className="text-sm text-purple-700">Ключевые метрики и сводная аналитика</p>
            </div>
          </div>
          {/* Топ метрики с динамикой */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Доходы */}
            <Card className="hover-scale transition-all duration-300 bg-gradient-to-br from-emerald-50 to-green-100 border-0 shadow-lg">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2 text-sm font-medium">
                  <Icon name="TrendingUp" size={16} />
                  Средний доход
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-emerald-700">
                      {incomeData[selectedPeriod as keyof typeof incomeData].value}
                    </span>
                    <Badge variant="default" className="bg-emerald-600 text-xs">
                      {incomeData[selectedPeriod as keyof typeof incomeData].change}
                    </Badge>
                  </div>

                  <div className="text-xs text-slate-600">
                    <Badge variant="outline" className="text-xs">
                      {incomeData[selectedPeriod as keyof typeof incomeData].vsCompetitors.value} {incomeData[selectedPeriod as keyof typeof incomeData].vsCompetitors.description}
                    </Badge>
                  </div>
                  
                  {/* Мини график */}
                  <div className="flex items-end gap-1 h-8">
                    {incomeData[selectedPeriod as keyof typeof incomeData].trend.map((point, index) => (
                      <div
                        key={index}
                        className="bg-gradient-to-t from-emerald-500 to-emerald-300 rounded-t-sm"
                        style={{ height: `${(point / 100) * 100}%`, width: '10px' }}
                      />
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Расходы */}
            <Card className="hover-scale transition-all duration-300 bg-gradient-to-br from-red-50 to-pink-100 border-0 shadow-lg">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2 text-sm font-medium">
                  <Icon name="Wallet" size={16} />
                  Кошелек клиента
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-red-700">
                      {expenseData[selectedPeriod as keyof typeof expenseData].value}
                    </span>
                    <Badge variant="destructive" className="text-xs">
                      {expenseData[selectedPeriod as keyof typeof expenseData].change}
                    </Badge>
                  </div>
                  
                  <div className="text-xs text-slate-600">
                    <Badge variant="outline" className="text-xs">
                      {expenseData[selectedPeriod as keyof typeof expenseData].vsCompetitors.value} выше конкурентов
                    </Badge>
                  </div>
                  
                  {/* Мини график */}
                  <div className="flex items-end gap-1 h-8">
                    {expenseData[selectedPeriod as keyof typeof expenseData].trend.map((point, index) => (
                      <div
                        key={index}
                        className="bg-gradient-to-t from-red-500 to-pink-300 rounded-t-sm"
                        style={{ height: `${(point / 100) * 100}%`, width: '10px' }}
                      />
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Средний чек */}
            <Card className="hover-scale transition-all duration-300 bg-gradient-to-br from-blue-50 to-indigo-100 border-0 shadow-lg">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2 text-sm font-medium">
                  <Icon name="Receipt" size={16} />
                  Средний чек
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-blue-700">
                      {averageCheckData[selectedPeriod as keyof typeof averageCheckData].value}
                    </span>
                    <Badge variant="default" className="bg-blue-600 text-xs">
                      {averageCheckData[selectedPeriod as keyof typeof averageCheckData].change}
                    </Badge>
                  </div>

                  <div className="text-xs text-slate-600">
                    <Badge variant="outline" className="text-xs">
                      {averageCheckData[selectedPeriod as keyof typeof averageCheckData].vsCompetitors.value} {averageCheckData[selectedPeriod as keyof typeof averageCheckData].vsCompetitors.description}
                    </Badge>
                  </div>
                  
                  {/* Мини график */}
                  <div className="flex items-end gap-1 h-8">
                    {averageCheckData[selectedPeriod as keyof typeof averageCheckData].trend.map((point, index) => {
                      const normalizedHeight = ((point - 1800) / (2450 - 1800)) * 100;
                      return (
                        <div
                          key={index}
                          className="bg-gradient-to-t from-blue-500 to-indigo-300 rounded-t-sm"
                          style={{ height: `${Math.max(normalizedHeight, 10)}%`, width: '10px' }}
                        />
                      );
                    })}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Кредитная нагрузка */}
            <Card className="hover-scale transition-all duration-300 bg-gradient-to-br from-orange-50 to-yellow-100 border-0 shadow-lg">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2 text-sm font-medium">
                  <Icon name="CreditCard" size={16} />
                  Кредитная нагрузка
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-orange-700">
                      {creditLoadData[selectedPeriod as keyof typeof creditLoadData].value}
                    </span>
                    <Badge variant="default" className="bg-green-600 text-xs">
                      {creditLoadData[selectedPeriod as keyof typeof creditLoadData].change}
                    </Badge>
                  </div>

                  <div className="text-xs text-slate-600">
                    <Badge variant="outline" className="text-xs">
                      {creditLoadData[selectedPeriod as keyof typeof creditLoadData].vsCompetitors.value} {creditLoadData[selectedPeriod as keyof typeof creditLoadData].vsCompetitors.description}
                    </Badge>
                  </div>
                  
                  {/* Мини график */}
                  <div className="flex items-end gap-1 h-8">
                    {creditLoadData[selectedPeriod as keyof typeof creditLoadData].trend.map((point, index) => (
                      <div
                        key={index}
                        className="bg-gradient-to-t from-orange-500 to-yellow-300 rounded-t-sm"
                        style={{ height: `${(point / 30) * 100}%`, width: '10px' }}
                      />
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Объединенная демография */}
          <Card className="p-6">
            <CardTitle className="flex items-center gap-2 mb-6">
              <Icon name="Users" size={20} />
              Демографический профиль аудитории
            </CardTitle>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Мужчины */}
              <div className="space-y-4">
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-4xl">👨</div>
                  <div>
                    <div className="text-xl font-bold text-blue-600">45%</div>
                    <div className="text-sm text-slate-600">Мужчины</div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <h4 className="font-semibold text-sm text-slate-700">Возрастное распределение:</h4>
                  {genderAgeData.male.ageDistribution.map((age, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <span className="text-sm">{age.range} лет</span>
                      <div className="flex items-center gap-2">
                        <div className="w-16 h-2 bg-slate-200 rounded-full">
                          <div 
                            className="h-full bg-blue-500 rounded-full transition-all duration-500"
                            style={{ width: `${age.percentage}%` }}
                          />
                        </div>
                        <span className="text-xs font-medium w-8">{age.percentage}%</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Женщины */}
              <div className="space-y-4">
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-4xl">👩</div>
                  <div>
                    <div className="text-xl font-bold text-pink-600">55%</div>
                    <div className="text-sm text-slate-600">Женщины</div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <h4 className="font-semibold text-sm text-slate-700">Возрастное распределение:</h4>
                  {genderAgeData.female.ageDistribution.map((age, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <span className="text-sm">{age.range} лет</span>
                      <div className="flex items-center gap-2">
                        <div className="w-16 h-2 bg-slate-200 rounded-full">
                          <div 
                            className="h-full bg-pink-500 rounded-full transition-all duration-500"
                            style={{ width: `${age.percentage}%` }}
                          />
                        </div>
                        <span className="text-xs font-medium w-8">{age.percentage}%</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </TabsContent>

        {/* Демография */}
        <TabsContent value="demographics" className="space-y-6">
          <div className="flex items-center gap-3 mb-6 p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border-l-4 border-green-500">
            <Icon name="Users" size={24} className="text-green-600" />
            <div>
              <h2 className="text-xl font-bold text-green-900">Демографический анализ</h2>
              <p className="text-sm text-green-700">Возраст, пол, семейное положение и образ жизни</p>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Базовая демография */}
            <Card className="p-6">
              <CardTitle className="flex items-center gap-2 mb-6">
                <Icon name="Users" size={20} />
                Демографический профиль
              </CardTitle>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-3">Распределение по полу</h4>
                  <div className="space-y-3">
                    {demographicData.map((item, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <span>{item.label}</span>
                        <div className="flex items-center gap-3">
                          <div className="w-24 h-2 bg-slate-200 rounded-full">
                            <div className={`h-full ${item.color} rounded-full transition-all duration-500`} style={{ width: `${item.value}%` }} />
                          </div>
                          <span className="text-sm font-bold w-10">{item.value}%</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Возрастные группы</h4>
                  <div className="space-y-3">
                    {ageGroups.map((group, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <span>{group.range} лет</span>
                        <div className="flex items-center gap-3">
                          <div className="w-24 h-2 bg-slate-200 rounded-full">
                            <div className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-500" style={{ width: `${group.percentage}%` }} />
                          </div>
                          <span className="text-sm font-bold w-16">{group.count}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>

            {/* Семейный статус */}
            <Card className="p-6">
              <CardTitle className="flex items-center gap-2 mb-6">
                <Icon name="Home" size={20} />
                Семейный статус и владение
              </CardTitle>
              
              <div className="space-y-4">
                {familyData.map((item, index) => (
                  <Card key={index} className="p-4 bg-gradient-to-r from-slate-50 to-slate-100">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm">
                          <Icon name={item.icon as any} size={20} className="text-slate-600" />
                        </div>
                        <span className="font-medium">{item.label}</span>
                      </div>
                      <div className="text-right">
                        <div className="text-xl font-bold text-slate-900">{item.value}%</div>
                        <div className="w-16 h-1 bg-slate-300 rounded-full mt-1">
                          <div 
                            className="h-full bg-gradient-to-r from-green-500 to-blue-500 rounded-full transition-all duration-500"
                            style={{ width: `${item.value}%` }}
                          />
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </Card>
          </div>

          {/* Кредитная нагрузка */}
          <Card className="p-6">
            <CardTitle className="flex items-center gap-2 mb-6">
              <Icon name="CreditCard" size={20} />
              Кредитная нагрузка и финансовые обязательства
            </CardTitle>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {creditData.map((credit, index) => (
                <Card key={index} className="p-4 bg-gradient-to-br from-orange-50 to-red-50">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-orange-700 mb-1">{credit.percentage}%</div>
                    <div className="text-sm font-medium text-slate-700 mb-2">{credit.type}</div>
                    <div className="text-xs text-slate-600">Средний размер: {credit.avgAmount}</div>
                    <div className="w-full h-1 bg-orange-200 rounded-full mt-2">
                      <div 
                        className="h-full bg-gradient-to-r from-orange-500 to-red-500 rounded-full transition-all duration-500"
                        style={{ width: `${credit.percentage}%` }}
                      />
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </Card>
        </TabsContent>

        {/* Финансы */}
        <TabsContent value="finances" className="space-y-6">
          <div className="flex items-center gap-3 mb-6 p-4 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl border-l-4 border-emerald-500">
            <Icon name="DollarSign" size={24} className="text-emerald-600" />
            <div>
              <h2 className="text-xl font-bold text-emerald-900">Финансовый профиль</h2>
              <p className="text-sm text-emerald-700">Доходы, расходы, кредитная нагрузка и платежеспособность</p>
            </div>
          </div>
          {/* Доходы и расходы в динамике */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="p-6 bg-gradient-to-br from-emerald-50 to-green-100">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-2">
                  <Icon name="TrendingUp" size={20} />
                  Доходы в динамике
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <span className="text-3xl font-bold text-emerald-700">
                      {incomeData[selectedPeriod as keyof typeof incomeData].value}
                    </span>
                    <Badge variant="default" className="bg-emerald-600">
                      {incomeData[selectedPeriod as keyof typeof incomeData].change}
                    </Badge>
                  </div>
                  
                  <div className="flex items-end gap-1 h-20">
                    {incomeData[selectedPeriod as keyof typeof incomeData].trend.map((point, index) => (
                      <div
                        key={index}
                        className="bg-gradient-to-t from-emerald-500 to-emerald-300 rounded-t-sm hover-scale cursor-pointer"
                        style={{ height: `${point}%`, width: '14%' }}
                        title={`День ${index + 1}: ${point}%`}
                      />
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-red-50 to-pink-100">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-2">
                  <Icon name="TrendingDown" size={20} />
                  Расходы в динамике
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <span className="text-3xl font-bold text-red-700">
                        {expenseData[selectedPeriod as keyof typeof expenseData].value}
                      </span>
                      <Badge variant="destructive">
                        {expenseData[selectedPeriod as keyof typeof expenseData].change}
                      </Badge>
                    </div>
                  </div>
                  
                  <div className="text-sm text-slate-600 mb-3">
                    <Badge variant="outline" className="text-xs">
                      {expenseData[selectedPeriod as keyof typeof expenseData].vsCompetitors.value} {expenseData[selectedPeriod as keyof typeof expenseData].vsCompetitors.description}
                    </Badge>
                  </div>
                  
                  <div className="flex items-end gap-1 h-20">
                    {expenseData[selectedPeriod as keyof typeof expenseData].trend.map((point, index) => (
                      <div
                        key={index}
                        className="bg-gradient-to-t from-red-500 to-pink-300 rounded-t-sm hover-scale cursor-pointer"
                        style={{ height: `${point}%`, width: '14%' }}
                        title={`День ${index + 1}: ${point}%`}
                      />
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Средний чек */}
          <Card className="p-6">
            <CardTitle className="flex items-center gap-2 mb-6">
              <Icon name="Receipt" size={20} />
              Анализ среднего чека клиента
            </CardTitle>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {Object.entries(averageCheckData).map(([period, data], index) => (
                <Card key={index} className={`p-4 transition-all cursor-pointer ${selectedPeriod === period ? 'ring-2 ring-blue-500 bg-blue-50' : 'hover:shadow-md'}`}>
                  <div className="text-center">
                    <div className="text-lg font-bold text-slate-900">{data.value}</div>
                    <div className="text-sm text-slate-600 mb-2">
                      {period === 'week' ? 'Неделя' : period === 'month' ? 'Месяц' : period === 'quarter' ? 'Квартал' : 'Год'}
                    </div>
                    <Badge variant={data.change.startsWith('+') ? 'default' : 'destructive'} className="text-xs">
                      {data.change}
                    </Badge>
                  </div>
                </Card>
              ))}
            </div>
          </Card>
        </TabsContent>

        {/* Покупки */}
        <TabsContent value="purchases" className="space-y-6">
          <div className="flex items-center gap-3 mb-6 p-4 bg-gradient-to-r from-pink-50 to-rose-50 rounded-xl border-l-4 border-pink-500">
            <Icon name="ShoppingCart" size={24} className="text-pink-600" />
            <div>
              <h2 className="text-xl font-bold text-pink-900">Поведение покупателей</h2>
              <p className="text-sm text-pink-700">Анализ корзины, частота и предпочтения в покупках</p>
            </div>
          </div>
          {/* Категории расходов */}
          <Card className="p-6">
            <CardTitle className="flex items-center gap-2 mb-6">
              <Icon name="ShoppingBag" size={20} />
              Основные категории расходов
            </CardTitle>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {expenseCategories.map((category, index) => (
                <Card key={index} className="p-4 hover-scale transition-all">
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`w-3 h-3 rounded-full ${category.color}`} />
                    <span className="font-medium">{category.name}</span>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-bold">{category.amount}</span>
                      <Badge variant="outline">{category.percentage}%</Badge>
                    </div>
                    
                    <div className="w-full h-2 bg-slate-200 rounded-full">
                      <div 
                        className={`h-full ${category.color} rounded-full transition-all duration-500`}
                        style={{ width: `${category.percentage}%` }}
                      />
                    </div>
                    
                    <div className="text-sm text-slate-600">
                      Средний чек: <span className="font-medium">{category.avgCheck}</span>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </Card>

          {/* Анализ корзины */}
          <Card className="p-6">
            <CardTitle className="flex items-center gap-2 mb-6">
              <Icon name="ShoppingCart" size={20} />
              Анализ корзины покупок
            </CardTitle>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {basketAnalysis.map((item, index) => (
                <Card key={index} className="p-4 bg-gradient-to-br from-slate-50 to-slate-100">
                  <div className="text-center space-y-3">
                    <h4 className="font-semibold text-slate-800">{item.category}</h4>
                    
                    <div className="text-2xl font-bold text-slate-900">{item.share}%</div>
                    <div className="text-sm text-slate-600">доли в корзине</div>
                    
                    <Badge variant={item.trend.startsWith('+') ? 'default' : 'destructive'} className="text-xs">
                      {item.trend}
                    </Badge>
                    
                    <div className="text-xs text-slate-600">
                      Среднее кол-во: <span className="font-medium">{item.avgItems} товаров</span>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </Card>
        </TabsContent>

        {/* Перетоки */}
        <TabsContent value="flows" className="space-y-6">
          <div className="flex items-center gap-3 mb-6 p-4 bg-gradient-to-r from-teal-50 to-cyan-50 rounded-xl border-l-4 border-teal-500">
            <Icon name="ArrowRightLeft" size={24} className="text-teal-600" />
            <div>
              <h2 className="text-xl font-bold text-teal-900">Перетоки клиентов</h2>
              <p className="text-sm text-teal-700">Миграция между брендами и конкурентами</p>
            </div>
          </div>
          <Card className="p-6">
            <CardTitle className="flex items-center gap-2 mb-6">
              <Icon name="ArrowRightLeft" size={20} />
              Перетоки клиентов между сетями
            </CardTitle>
            
            <div className="space-y-4">
              {flowData.map((flow, index) => (
                <Card key={index} className="p-4 hover-scale transition-all bg-gradient-to-r from-blue-50 to-indigo-50">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-3">
                        <div className="px-3 py-2 bg-white rounded-lg shadow-sm font-medium">
                          {flow.from}
                        </div>
                        <Icon name="ArrowRight" size={20} className="text-slate-400" />
                        <div className="px-3 py-2 bg-white rounded-lg shadow-sm font-medium">
                          {flow.to}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-6">
                      <div className="text-center">
                        <div className="text-lg font-bold text-slate-900">{flow.people}</div>
                        <div className="text-xs text-slate-600">человек</div>
                      </div>
                      
                      <div className="text-center">
                        <div className="text-lg font-bold text-slate-900">{flow.money}</div>
                        <div className="text-xs text-slate-600">оборот</div>
                      </div>
                      
                      <Badge variant={flow.trend.startsWith('+') ? 'default' : 'destructive'}>
                        {flow.trend}
                      </Badge>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </Card>
        </TabsContent>

        {/* География */}
        <TabsContent value="geography" className="space-y-6">
          <div className="flex items-center gap-3 mb-6 p-4 bg-gradient-to-r from-indigo-50 to-blue-50 rounded-xl border-l-4 border-indigo-500">
            <Icon name="MapPin" size={24} className="text-indigo-600" />
            <div>
              <h2 className="text-xl font-bold text-indigo-900">Географическое распределение</h2>
              <p className="text-sm text-indigo-700">Региональная активность и предпочтения клиентов</p>
            </div>
          </div>
          <Card className="p-6">
            <CardTitle className="flex items-center gap-2 mb-6">
              <Icon name="MapPin" size={20} />
              Географическое распределение клиентов
            </CardTitle>
            
            <div className="space-y-4">
              {regionData.map((region, index) => (
                <Card key={index} className="p-4 hover-scale transition-all">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center text-white font-bold">
                        {region.region.slice(0, 2).toUpperCase()}
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900">{region.region}</h4>
                        <p className="text-sm text-slate-600">{region.clients.toLocaleString()} клиентов</p>
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <div className="text-lg font-bold text-slate-900">{region.avgSpend}</div>
                      <div className="text-sm text-slate-600">средние траты</div>
                      <Badge variant="default" className="text-xs mt-1">
                        {region.growth}
                      </Badge>
                    </div>
                  </div>
                  
                  <div className="mt-3 w-full h-1 bg-slate-200 rounded-full">
                    <div 
                      className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-1000"
                      style={{ width: `${Math.min((region.clients / 12500) * 100, 100)}%` }}
                    />
                  </div>
                </Card>
              ))}
            </div>
          </Card>
        </TabsContent>

        {/* Настройки */}
        <TabsContent value="settings" className="space-y-6">
          <div className="flex items-center gap-3 mb-6 p-4 bg-gradient-to-r from-slate-50 to-gray-50 rounded-xl border-l-4 border-slate-500">
            <Icon name="Settings" size={24} className="text-slate-600" />
            <div>
              <h2 className="text-xl font-bold text-slate-900">Настройки</h2>
              <p className="text-sm text-slate-700">Конфигурация уведомлений и автоматизации</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Подписки на уведомления */}
            <Card className="p-6">
              <CardTitle className="flex items-center gap-2 mb-6">
                <Icon name="Bell" size={20} />
                Подписки на ключевые инсайты
              </CardTitle>
              
              <div className="space-y-4">
                <div className="bg-blue-50 rounded-lg p-4">
                  <h4 className="font-semibold text-slate-800 mb-3">Настройка уведомлений</h4>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-white rounded-lg border">
                      <div className="flex items-center gap-3">
                        <Icon name="Calendar" size={16} className="text-blue-600" />
                        <div>
                          <div className="font-medium">Ежедневные отчёты</div>
                          <div className="text-sm text-slate-600">Сводка изменений в 09:00</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className="text-xs">09:00</Badge>
                        <Button size="sm" variant="outline" className="text-xs">
                          <Icon name="Check" size={12} className="mr-1" />
                          Включено
                        </Button>
                      </div>
                    </div>

                    <div className="flex items-center justify-between p-3 bg-white rounded-lg border">
                      <div className="flex items-center gap-3">
                        <Icon name="CalendarWeek" size={16} className="text-green-600" />
                        <div>
                          <div className="font-medium">Еженедельные сводки</div>
                          <div className="text-sm text-slate-600">Детальный анализ по понедельникам</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className="text-xs">Пн 10:00</Badge>
                        <Button size="sm" variant="outline" className="text-xs">
                          <Icon name="Check" size={12} className="mr-1" />
                          Включено
                        </Button>
                      </div>
                    </div>

                    <div className="flex items-center justify-between p-3 bg-white rounded-lg border border-dashed">
                      <div className="flex items-center gap-3">
                        <Icon name="CalendarDays" size={16} className="text-purple-600" />
                        <div>
                          <div className="font-medium">Ежемесячные отчёты</div>
                          <div className="text-sm text-slate-600">Глубокая аналитика 1 числа</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className="text-xs text-slate-400">1 число</Badge>
                        <Button size="sm" variant="outline" className="text-xs text-slate-400">
                          <Icon name="X" size={12} className="mr-1" />
                          Выключено
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-amber-50 rounded-lg p-4 border border-amber-200">
                  <h4 className="font-semibold text-amber-800 mb-2">📧 Email-адреса для уведомлений</h4>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Badge className="bg-green-600 text-white text-xs">Активен</Badge>
                      <span className="text-sm">director@company.ru</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge className="bg-green-600 text-white text-xs">Активен</Badge>
                      <span className="text-sm">analytics@company.ru</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className="text-xs">Не активен</Badge>
                      <span className="text-sm text-slate-400">marketing@company.ru</span>
                    </div>
                  </div>
                  <Button size="sm" className="mt-3 bg-amber-600 hover:bg-amber-700 text-white text-xs">
                    <Icon name="Plus" size={12} className="mr-1" />
                    Добавить email
                  </Button>
                </div>
              </div>
            </Card>

            {/* Автоматические задачи */}
            <Card className="p-6">
              <CardTitle className="flex items-center gap-2 mb-6">
                <Icon name="Zap" size={20} />
                Автоматические задачи подразделениям
              </CardTitle>
              
              <div className="space-y-4">
                <div className="bg-green-50 rounded-lg p-4">
                  <h4 className="font-semibold text-slate-800 mb-3">Активные автоматизации</h4>
                  <div className="space-y-3">
                    <div className="bg-white rounded-lg p-3 border-l-4 border-red-500">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium text-sm">📉 Снижение новых клиентов &gt; 5%</span>
                        <Badge className="bg-red-600 text-white text-xs">Активно</Badge>
                      </div>
                      <div className="text-xs text-slate-600 mb-2">
                        → Задача команде маркетинга: разработать план увеличения привлечения
                      </div>
                      <div className="flex items-center gap-2">
                        <Icon name="Users" size={12} className="text-slate-400" />
                        <span className="text-xs text-slate-500">Отдел маркетинга</span>
                        <Badge variant="outline" className="text-xs">Высокий приоритет</Badge>
                      </div>
                    </div>

                    <div className="bg-white rounded-lg p-3 border-l-4 border-orange-500">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium text-sm">💰 Снижение выручки &gt; 10%</span>
                        <Badge className="bg-orange-600 text-white text-xs">Активно</Badge>
                      </div>
                      <div className="text-xs text-slate-600 mb-2">
                        → Задача performance-команде: провести аудит эффективности каналов
                      </div>
                      <div className="flex items-center gap-2">
                        <Icon name="TrendingUp" size={12} className="text-slate-400" />
                        <span className="text-xs text-slate-500">Performance-отдел</span>
                        <Badge variant="outline" className="text-xs">Высокий приоритет</Badge>
                      </div>
                    </div>

                    <div className="bg-white rounded-lg p-3 border-l-4 border-blue-500">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium text-sm">🎯 LTV снижается &gt; 15%</span>
                        <Badge className="bg-blue-600 text-white text-xs">Активно</Badge>
                      </div>
                      <div className="text-xs text-slate-600 mb-2">
                        → Задача команде продукта: запустить программу удержания клиентов
                      </div>
                      <div className="flex items-center gap-2">
                        <Icon name="Package" size={12} className="text-slate-400" />
                        <span className="text-xs text-slate-500">Продуктовая команда</span>
                        <Badge variant="outline" className="text-xs">Средний приоритет</Badge>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-50 rounded-lg p-4">
                  <h4 className="font-semibold text-slate-800 mb-3">Настройка новой автоматизации</h4>
                  <Button className="w-full bg-slate-700 hover:bg-slate-800 text-white text-sm">
                    <Icon name="Plus" size={16} className="mr-2" />
                    Создать правило автоматизации
                  </Button>
                  <div className="text-xs text-slate-500 mt-2 text-center">
                    Создавайте правила для автоматической отправки задач при изменении ключевых метрик
                  </div>
                </div>

                <div className="bg-yellow-50 rounded-lg p-4 border border-yellow-200">
                  <h4 className="font-semibold text-yellow-800 mb-2">⚡ Статистика автоматизации</h4>
                  <div className="grid grid-cols-3 gap-3 text-center">
                    <div>
                      <div className="text-lg font-bold text-slate-900">47</div>
                      <div className="text-xs text-slate-600">задач создано</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-slate-900">34</div>
                      <div className="text-xs text-slate-600">выполнено</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-slate-900">89%</div>
                      <div className="text-xs text-slate-600">эффективность</div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Index;