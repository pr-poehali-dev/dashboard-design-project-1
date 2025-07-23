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
          <TabsList className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-10 w-full gap-2 bg-slate-50 p-2 rounded-lg h-auto">
            <TabsTrigger 
              value="key-insights" 
              className="flex flex-col items-center gap-1 p-3 data-[state=active]:bg-amber-500 data-[state=active]:text-white transition-all duration-200 h-auto"
            >
              <Icon name="TrendingUp" size={18} />
              <span className="text-xs font-medium">Ключевое</span>
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
                      <span className="font-medium text-green-800">Конверсия мобильное приложение</span>
                      <Badge className="bg-green-600 text-white">+12.3%</Badge>
                    </div>
                    <p className="text-sm text-green-700">
                      Улучшение с 3.2% до 3.6% после обновления UI
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
                <div className="space-y-4">
                  <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-500">
                    <h4 className="font-semibold text-blue-800 mb-2">
                      💡 Рост среднего чека при снижении количества заказов
                    </h4>
                    <p className="text-sm text-blue-700 mb-3">
                      Клиенты стали покупать меньше, но дороже. Возможные причины:
                    </p>
                    <ul className="text-xs text-blue-600 space-y-1 ml-4">
                      <li>• Сезонность: переход к покупке зимних товаров</li>
                      <li>• Улучшение ассортимента премиум-сегмента</li>
                      <li>• Изменение поведения: более осознанные покупки</li>
                    </ul>
                  </div>

                  <div className="bg-purple-50 rounded-lg p-4 border-l-4 border-purple-500">
                    <h4 className="font-semibold text-purple-800 mb-2">
                      💡 Успех мобильного приложения
                    </h4>
                    <p className="text-sm text-purple-700 mb-3">
                      Обновление UI приложения дало положительный эффект:
                    </p>
                    <ul className="text-xs text-purple-600 space-y-1 ml-4">
                      <li>• Упрощение процесса оформления заказа</li>
                      <li>• Персонализированные рекомендации</li>
                      <li>• Улучшенная навигация по каталогу</li>
                    </ul>
                  </div>

                  <div className="bg-orange-50 rounded-lg p-4 border-l-4 border-orange-500">
                    <h4 className="font-semibold text-orange-800 mb-2">
                      💡 Проблема с возвратами
                    </h4>
                    <p className="text-sm text-orange-700 mb-3">
                      Рост возвратов требует внимания:
                    </p>
                    <ul className="text-xs text-orange-600 space-y-1 ml-4">
                      <li>• Проверить качество новых поставщиков</li>
                      <li>• Улучшить описания товаров</li>
                      <li>• Анализ отзывов и причин возвратов</li>
                    </ul>
                  </div>
                </div>

                {/* Рекомендации */}
                <div className="bg-amber-50 rounded-lg p-4 border border-amber-200">
                  <h4 className="font-semibold text-amber-800 mb-3 flex items-center gap-2">
                    <Icon name="CheckCircle" size={16} />
                    Рекомендации к действию
                  </h4>
                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <Badge className="bg-green-600 text-white text-xs">Высокий</Badge>
                      <span className="text-sm text-amber-700">Масштабировать успешные изменения в приложении на веб-версию</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Badge className="bg-yellow-600 text-white text-xs">Средний</Badge>
                      <span className="text-sm text-amber-700">Провести анализ причин роста возвратов</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Badge className="bg-blue-600 text-white text-xs">Средний</Badge>
                      <span className="text-sm text-amber-700">Усилить маркетинг для привлечения новых клиентов</span>
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

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Количество покупок */}
            <Card className="p-6">
              <CardTitle className="flex items-center gap-2 mb-6">
                <Icon name="ShoppingCart" size={20} />
                Количество покупок
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
              <CardTitle className="flex items-center gap-2 mb-6">
                <Icon name="UserCheck" size={20} />
                Уникальные покупатели
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
            {/* Новые клиенты */}
            <Card className="p-6">
              <CardTitle className="flex items-center gap-2 mb-6">
                <Icon name="UserPlus" size={20} />
                Новые клиенты
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
              </div>
            </Card>

            {/* North Star блок */}
            <Card className="p-6 border-2 border-dashed border-emerald-300 bg-emerald-50">
              <CardTitle className="flex items-center gap-2 mb-6">
                <Icon name="Star" size={20} className="text-emerald-600" />
                North Star Метрика
              </CardTitle>
              
              <div className="text-center py-8">
                <Icon name="Plus" size={48} className="text-emerald-400 mb-4 mx-auto" />
                <div className="text-lg font-semibold text-emerald-800 mb-2">
                  Выберите ключевую метрику
                </div>
                <div className="text-sm text-emerald-600 mb-6">
                  Добавьте главный показатель для отслеживания успеха вашего бизнеса
                </div>
                <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">
                  <Icon name="Plus" size={16} className="mr-2" />
                  Add (Free)
                </Button>
              </div>

              <div className="mt-6 p-4 bg-white rounded-lg border border-emerald-200">
                <h4 className="font-medium text-emerald-800 mb-2">Популярные метрики:</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="text-emerald-700 border-emerald-300">MRR</Badge>
                  <Badge variant="outline" className="text-emerald-700 border-emerald-300">LTV</Badge>
                  <Badge variant="outline" className="text-emerald-700 border-emerald-300">Конверсия</Badge>
                  <Badge variant="outline" className="text-emerald-700 border-emerald-300">Retention</Badge>
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
              <p className="text-sm text-blue-700">Показатели приверженности и долгосрочного взаимодействия</p>
            </div>
          </div>
          {/* Ключевые метрики лояльности */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Частота покупок */}
            <Card className="hover-scale transition-all duration-300 bg-gradient-to-br from-blue-50 to-indigo-100 border-0 shadow-lg">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2 text-sm font-medium">
                  <Icon name="RotateCcw" size={16} />
                  Частота покупок
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
                <CardTitle className="flex items-center gap-2 text-sm font-medium">
                  <Icon name="Clock" size={16} />
                  Life Time
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
                <CardTitle className="flex items-center gap-2 text-sm font-medium">
                  <Icon name="DollarSign" size={16} />
                  LTV
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
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
      </Tabs>
    </div>
  );
};

export default Index;