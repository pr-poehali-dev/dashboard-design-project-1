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

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-6">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
            <Icon name="BarChart3" size={24} className="text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-slate-900">Аналитика клиентов</h1>
            <p className="text-slate-600">Комплексный анализ поведения и предпочтений</p>
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
      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="grid grid-cols-6 w-fit">
          <TabsTrigger value="overview">Обзор</TabsTrigger>
          <TabsTrigger value="demographics">Демография</TabsTrigger>
          <TabsTrigger value="finances">Финансы</TabsTrigger>
          <TabsTrigger value="purchases">Покупки</TabsTrigger>
          <TabsTrigger value="flows">Перетоки</TabsTrigger>
          <TabsTrigger value="geography">География</TabsTrigger>
        </TabsList>

        {/* Обзор */}
        <TabsContent value="overview" className="space-y-6">
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