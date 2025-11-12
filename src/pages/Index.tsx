import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Badge } from "@/components/ui/badge";

const Index = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const products = [
    {
      name: "Натуральная курица",
      description: "100% мясо курицы без добавок",
      price: "890₽",
      weight: "2 кг",
      badge: "Хит продаж"
    },
    {
      name: "Лосось и рис",
      description: "Богат Омега-3 для здоровья шерсти",
      price: "1290₽",
      weight: "2 кг",
      badge: "Премиум"
    },
    {
      name: "Индейка с овощами",
      description: "Гипоаллергенный состав",
      price: "990₽",
      weight: "2 кг",
      badge: null
    },
    {
      name: "Говядина с тыквой",
      description: "Для здорового пищеварения",
      price: "950₽",
      weight: "2 кг",
      badge: null
    },
    {
      name: "Утка с ягодами",
      description: "Деликатесный вкус для гурманов",
      price: "1390₽",
      weight: "2 кг",
      badge: "Новинка"
    },
    {
      name: "Кролик и шпинат",
      description: "Легкоусвояемый белок",
      price: "1150₽",
      weight: "2 кг",
      badge: null
    }
  ];

  const benefits = [
    {
      icon: "Leaf",
      title: "100% натуральный состав",
      description: "Без искусственных красителей, ароматизаторов и консервантов"
    },
    {
      icon: "Heart",
      title: "Сбалансированное питание",
      description: "Все необходимые витамины и минералы для здоровья вашего питомца"
    },
    {
      icon: "Award",
      title: "Проверенное качество",
      description: "Производство под контролем ветеринаров"
    },
    {
      icon: "Truck",
      title: "Доставка по всей России",
      description: "Бережная доставка в течение 2-5 дней"
    }
  ];

  const ingredients = [
    { name: "Мясо", percentage: 65 },
    { name: "Овощи и злаки", percentage: 20 },
    { name: "Витамины", percentage: 10 },
    { name: "Минералы", percentage: 5 }
  ];

  const reviews = [
    {
      name: "Мария К.",
      text: "Мой кот в восторге! Ест с удовольствием, шерсть стала блестящей",
      rating: 5
    },
    {
      name: "Алексей П.",
      text: "Отличный корм по разумной цене. Состав действительно натуральный",
      rating: 5
    },
    {
      name: "Елена С.",
      text: "Доставка быстрая, упаковка качественная. Кошка довольна!",
      rating: 5
    },
    {
      name: "Дмитрий В.",
      text: "Перешли на EcoCat полгода назад. Кот стал активнее, проблемы с желудком исчезли",
      rating: 5
    },
    {
      name: "Анна М.",
      text: "Наконец нашли корм без аллергии! Спасибо за натуральный состав",
      rating: 5
    },
    {
      name: "Игорь Л.",
      text: "Заказываем регулярно. Отличное соотношение цены и качества",
      rating: 5
    }
  ];

  const faq = [
    {
      question: "Как долго хранится открытая упаковка?",
      answer: "После вскрытия упаковки корм следует хранить в сухом прохладном месте не более 30 дней. Рекомендуем пересыпать в герметичный контейнер."
    },
    {
      question: "Подходит ли корм котятам?",
      answer: "Да, наши корма подходят для кошек всех возрастов, включая котят от 3 месяцев. В составе все необходимые витамины для роста."
    },
    {
      question: "Есть ли доставка в регионы?",
      answer: "Мы доставляем по всей России. Срок доставки 2-5 дней в зависимости от региона. Доставка бесплатна при заказе от 3000₽."
    },
    {
      question: "Можно ли смешивать разные вкусы?",
      answer: "Да, вы можете комбинировать разные вкусы для разнообразия рациона вашего питомца. Это даже приветствуется!"
    }
  ];

  return (
    <div className="min-h-screen">
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm z-50 border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Cat" size={28} className="text-primary" />
            <span className="text-xl font-bold text-primary">EcoCat</span>
          </div>
          <div className="hidden md:flex gap-6">
            <button onClick={() => scrollToSection('products')} className="hover:text-primary transition-colors">Продукция</button>
            <button onClick={() => scrollToSection('benefits')} className="hover:text-primary transition-colors">Преимущества</button>
            <button onClick={() => scrollToSection('ingredients')} className="hover:text-primary transition-colors">Состав</button>
            <button onClick={() => scrollToSection('reviews')} className="hover:text-primary transition-colors">Отзывы</button>
            <button onClick={() => scrollToSection('contacts')} className="hover:text-primary transition-colors">Контакты</button>
          </div>
          <Button onClick={() => scrollToSection('catalog')}>В каталог</Button>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://cdn.poehali.dev/projects/7b35017b-7ee7-4be8-b7a0-99b906387ccd/files/b48b2847-05ff-439b-9901-26d54abb08b1.jpg" 
            alt="Здоровая кошка" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/90 to-muted/95" />
        </div>
        <div className="container mx-auto text-center max-w-4xl relative z-10">
          <Badge className="mb-4 animate-scale-in">🌿 Натуральное питание</Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            Здоровье вашей кошки начинается с правильного питания
          </h1>
          <p className="text-xl text-muted-foreground mb-8 animate-fade-in">
            Корма премиум-класса из натуральных ингредиентов. Без химии, только польза.
          </p>
          <div className="flex gap-4 justify-center animate-fade-in">
            <Button size="lg" onClick={() => scrollToSection('catalog')}>
              Перейти в каталог
              <Icon name="ArrowRight" size={20} className="ml-2" />
            </Button>
            <Button size="lg" variant="outline" onClick={() => scrollToSection('products')}>
              Узнать больше
            </Button>
          </div>
        </div>
      </section>

      <section id="products" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Наша продукция</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Выберите идеальный корм для вашего питомца из нашей линейки натуральных продуктов
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="aspect-square bg-muted rounded-lg mb-4 overflow-hidden">
                    <img 
                      src="https://cdn.poehali.dev/projects/7b35017b-7ee7-4be8-b7a0-99b906387ccd/files/cf6336f0-790d-404e-9d01-de66a5eaff27.jpg" 
                      alt={product.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  {product.badge && (
                    <Badge className="mb-2" variant="secondary">{product.badge}</Badge>
                  )}
                  <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                  <p className="text-muted-foreground mb-4">{product.description}</p>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-primary">{product.price}</span>
                    <span className="text-muted-foreground">{product.weight}</span>
                  </div>
                  <Button className="w-full">В корзину</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="benefits" className="py-20 px-4 bg-muted">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Почему выбирают нас</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Мы заботимся о здоровье ваших питомцев, предлагая только лучшее
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center">
                <CardContent className="pt-8 pb-6">
                  <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={benefit.icon as any} size={32} className="text-white" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="ingredients" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-4">Натуральный состав</h2>
          <p className="text-center text-muted-foreground mb-12">
            Каждый ингредиент тщательно отобран для максимальной пользы
          </p>
          <div className="space-y-6">
            {ingredients.map((ingredient, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-semibold">{ingredient.name}</span>
                  <span className="text-primary font-bold">{ingredient.percentage}%</span>
                </div>
                <div className="h-3 bg-muted rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-secondary rounded-full transition-all duration-1000"
                    style={{ width: `${ingredient.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
          <Card className="mt-12 bg-accent/10 border-accent">
            <CardContent className="pt-6">
              <div className="flex gap-4">
                <Icon name="CheckCircle" size={24} className="text-secondary flex-shrink-0" />
                <div>
                  <h4 className="font-bold mb-2">Без вредных добавок</h4>
                  <p className="text-sm text-muted-foreground">
                    Мы не используем искусственные красители, ароматизаторы, консерванты и ГМО. 
                    Только натуральные компоненты высшего качества.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="reviews" className="py-20 px-4 bg-muted">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Отзывы наших клиентов</h2>
          <p className="text-center text-muted-foreground mb-12">
            Более 5000 довольных котиков и их владельцев
          </p>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {reviews.map((review, index) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={18} className="text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4">"{review.text}"</p>
                  <p className="font-semibold">{review.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="catalog" className="py-20 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto text-center max-w-3xl">
          <h2 className="text-4xl font-bold mb-6">Готовы позаботиться о своем питомце?</h2>
          <p className="text-xl mb-8 opacity-90">
            Перейдите в наш каталог и выберите идеальный корм для вашей кошки
          </p>
          <Button size="lg" variant="secondary">
            Открыть каталог
            <Icon name="ShoppingCart" size={20} className="ml-2" />
          </Button>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-12">Свяжитесь с нами</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex gap-4">
                <Icon name="Phone" size={24} className="text-primary" />
                <div>
                  <h3 className="font-bold mb-1">Телефон</h3>
                  <p className="text-muted-foreground">+7 (495) 123-45-67</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Icon name="Mail" size={24} className="text-primary" />
                <div>
                  <h3 className="font-bold mb-1">Email</h3>
                  <p className="text-muted-foreground">info@ecocat.ru</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Icon name="MapPin" size={24} className="text-primary" />
                <div>
                  <h3 className="font-bold mb-1">Адрес</h3>
                  <p className="text-muted-foreground">г. Москва, ул. Примерная, д. 123</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Icon name="Clock" size={24} className="text-primary" />
                <div>
                  <h3 className="font-bold mb-1">Режим работы</h3>
                  <p className="text-muted-foreground">Пн-Пт: 9:00 - 20:00<br />Сб-Вс: 10:00 - 18:00</p>
                </div>
              </div>
            </div>
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-bold text-xl mb-4">Остались вопросы?</h3>
                <form className="space-y-4">
                  <div>
                    <input 
                      type="text" 
                      placeholder="Ваше имя" 
                      className="w-full px-4 py-2 rounded-md border bg-background"
                    />
                  </div>
                  <div>
                    <input 
                      type="email" 
                      placeholder="Email" 
                      className="w-full px-4 py-2 rounded-md border bg-background"
                    />
                  </div>
                  <div>
                    <textarea 
                      placeholder="Ваше сообщение" 
                      rows={4}
                      className="w-full px-4 py-2 rounded-md border bg-background"
                    />
                  </div>
                  <Button className="w-full">Отправить</Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground py-8 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Icon name="Cat" size={24} />
            <span className="text-xl font-bold">EcoCat</span>
          </div>
          <p className="opacity-90">© 2024 EcoCat. Натуральные корма для здоровья ваших питомцев.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;