import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import Icon from "@/components/ui/icon";

const Index = () => {
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

  const financialMetrics = [
    { title: "Средний доход", value: "85,500₽", change: "+12.5%" },
    { title: "Средние расходы", value: "67,200₽", change: "+8.3%" },
    { title: "Средний чек", value: "2,450₽", change: "+15.7%" },
    { title: "Кредитная нагрузка", value: "23%", change: "-2.1%" },
  ];

  const topCategories = [
    { name: "Продукты питания", amount: "18,500₽", percentage: 28 },
    { name: "Транспорт", amount: "12,300₽", percentage: 18 },
    { name: "Развлечения", amount: "9,800₽", percentage: 15 },
    { name: "Одежда", amount: "7,600₽", percentage: 11 },
    { name: "Здоровье", amount: "6,200₽", percentage: 9 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 p-6">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Analytics Dashboard
            </h1>
            <p className="text-slate-600 mt-2">Аналитика клиентской базы и поведения</p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline" className="hover-scale">
              <Icon name="Settings" size={16} className="mr-2" />
              Настройки
            </Button>
            <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover-scale">
              <Icon name="Download" size={16} className="mr-2" />
              Экспорт
            </Button>
          </div>
        </div>
      </div>

      {/* Main Dashboard */}
      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="grid grid-cols-5 w-fit">
          <TabsTrigger value="overview">Обзор</TabsTrigger>
          <TabsTrigger value="demographics">Демография</TabsTrigger>
          <TabsTrigger value="finances">Финансы</TabsTrigger>
          <TabsTrigger value="purchases">Покупки</TabsTrigger>
          <TabsTrigger value="flows">Перетоки</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {financialMetrics.map((metric, index) => (
              <Card key={index} className="hover-scale transition-all duration-300 bg-gradient-to-br from-white to-slate-50 border-0 shadow-lg">
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium text-slate-600">{metric.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-slate-900">{metric.value}</span>
                    <Badge variant={metric.change.startsWith('+') ? 'default' : 'destructive'} className="animate-pulse">
                      {metric.change}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Demographics Overview */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="bg-gradient-to-br from-white to-blue-50 border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Users" size={20} />
                  Распределение по полу
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {demographicData.map((item, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className={`w-4 h-4 rounded-full ${item.color}`}></div>
                        <span className="font-medium">{item.label}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Progress value={item.value} className="w-20" />
                        <span className="text-sm font-semibold">{item.value}%</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-white to-green-50 border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Calendar" size={20} />
                  Возрастные группы
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {ageGroups.map((group, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="font-medium text-slate-700">{group.range}</span>
                        <Badge variant="outline">{group.count.toLocaleString()}</Badge>
                      </div>
                      <div className="flex items-center gap-2">
                        <Progress value={group.percentage} className="w-16" />
                        <span className="text-sm font-semibold">{group.percentage}%</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="demographics" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <Card className="bg-gradient-to-br from-white to-purple-50 border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="MapPin" size={20} />
                  География клиентов
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span>Москва</span>
                    <Badge>35%</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>СПб</span>
                    <Badge>22%</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Регионы</span>
                    <Badge>43%</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-white to-orange-50 border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Baby" size={20} />
                  Наличие детей
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span>Есть дети</span>
                    <Badge>67%</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Нет детей</span>
                    <Badge>33%</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-white to-cyan-50 border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Car" size={20} />
                  Владение авто
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span>Есть авто</span>
                    <Badge>78%</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Нет авто</span>
                    <Badge>22%</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="finances" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="bg-gradient-to-br from-white to-emerald-50 border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="TrendingUp" size={20} />
                  Динамика доходов
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-32 bg-gradient-to-r from-emerald-100 to-emerald-200 rounded-lg flex items-center justify-center">
                  <span className="text-emerald-700 font-medium">График доходов +12.5% ↗</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-white to-red-50 border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="TrendingDown" size={20} />
                  Динамика расходов
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-32 bg-gradient-to-r from-red-100 to-red-200 rounded-lg flex items-center justify-center">
                  <span className="text-red-700 font-medium">График расходов +8.3% ↗</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="purchases" className="space-y-6">
          <Card className="bg-gradient-to-br from-white to-indigo-50 border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="ShoppingCart" size={20} />
                Топ категории расходов
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {topCategories.map((category, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-white rounded-lg shadow-sm hover-scale">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-8 bg-gradient-to-b from-blue-500 to-indigo-500 rounded-full"></div>
                      <span className="font-medium">{category.name}</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <Progress value={category.percentage} className="w-20" />
                      <span className="font-semibold text-slate-900">{category.amount}</span>
                      <Badge variant="outline">{category.percentage}%</Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="flows" className="space-y-6">
          <Card className="bg-gradient-to-br from-white to-violet-50 border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="ArrowLeftRight" size={20} />
                Перетоки между сетями
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <div className="text-2xl font-bold text-violet-600">2,580</div>
                  <div className="text-sm text-slate-600">Приток клиентов</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <div className="text-2xl font-bold text-orange-600">1,240</div>
                  <div className="text-sm text-slate-600">Отток клиентов</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <div className="text-2xl font-bold text-emerald-600">+52%</div>
                  <div className="text-sm text-slate-600">Чистый прирост</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* ML Insights */}
      <Card className="mt-8 bg-gradient-to-br from-slate-900 to-slate-800 text-white border-0 shadow-xl">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Icon name="Brain" size={20} />
            ML Прогнозы поведения клиентов
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 bg-white/10 rounded-lg backdrop-blur-sm">
              <div className="text-lg font-semibold text-emerald-400">Высокая вероятность покупки</div>
              <div className="text-2xl font-bold">1,250 клиентов</div>
              <div className="text-sm text-slate-300">Следующие 7 дней</div>
            </div>
            <div className="p-4 bg-white/10 rounded-lg backdrop-blur-sm">
              <div className="text-lg font-semibold text-orange-400">Риск оттока</div>
              <div className="text-2xl font-bold">340 клиентов</div>
              <div className="text-sm text-slate-300">Требуют внимания</div>
            </div>
            <div className="p-4 bg-white/10 rounded-lg backdrop-blur-sm">
              <div className="text-lg font-semibold text-blue-400">Потенциал роста чека</div>
              <div className="text-2xl font-bold">+28%</div>
              <div className="text-sm text-slate-300">При персонализации</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Index;