import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [cartItems, setCartItems] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { name: 'Смартфоны', icon: 'Smartphone', count: 150 },
    { name: 'Ноутбуки', icon: 'Laptop', count: 89 },
    { name: 'Планшеты', icon: 'Tablet', count: 45 },
    { name: 'Наушники', icon: 'Headphones', count: 120 },
    { name: 'Аксессуары', icon: 'Cable', count: 200 },
    { name: 'Умные часы', icon: 'Watch', count: 67 }
  ];

  const featuredProducts = [
    {
      id: 1,
      name: 'iPhone 15 Pro',
      price: '99 990 ₽',
      originalPrice: '109 990 ₽',
      image: '/placeholder.svg',
      rating: 4.8,
      reviews: 342,
      seller: 'TechStore',
      badge: 'Хит продаж'
    },
    {
      id: 2,
      name: 'MacBook Air M2',
      price: '119 990 ₽',
      originalPrice: '129 990 ₽',
      image: '/placeholder.svg',
      rating: 4.9,
      reviews: 198,
      seller: 'AppleShop',
      badge: 'Новинка'
    },
    {
      id: 3,
      name: 'Samsung Galaxy S24',
      price: '89 990 ₽',
      originalPrice: '99 990 ₽',
      image: '/placeholder.svg',
      rating: 4.7,
      reviews: 256,
      seller: 'MobileWorld',
      badge: 'Скидка'
    },
    {
      id: 4,
      name: 'AirPods Pro 2',
      price: '24 990 ₽',
      originalPrice: '27 990 ₽',
      image: '/placeholder.svg',
      rating: 4.6,
      reviews: 412,
      seller: 'AudioTech',
      badge: 'Популярное'
    }
  ];

  const addToCart = (productId: number) => {
    setCartItems(prev => prev + 1);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-marketplace-cream to-gray-50">
      {/* Header */}
      <header className="bg-marketplace-deep-black text-white shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <h1 className="text-2xl font-bold">SILK ROAD</h1>
              <span className="text-marketplace-light-sand text-sm">MARKETPLACE</span>
            </div>
            
            {/* Search */}
            <div className="flex-1 max-w-2xl mx-8">
              <div className="relative">
                <Input
                  placeholder="Поиск товаров..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 bg-marketplace-warm-gray border-marketplace-saddle-brown text-white placeholder:text-gray-400"
                />
                <Icon name="Search" className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              </div>
            </div>

            {/* User Actions */}
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" className="text-white hover:bg-marketplace-warm-gray">
                <Icon name="User" className="h-5 w-5 mr-2" />
                Войти
              </Button>
              <Button variant="ghost" size="sm" className="text-white hover:bg-marketplace-warm-gray relative">
                <Icon name="ShoppingCart" className="h-5 w-5 mr-2" />
                Корзина
                {cartItems > 0 && (
                  <Badge className="absolute -top-2 -right-2 bg-marketplace-light-sand text-black text-xs">
                    {cartItems}
                  </Badge>
                )}
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-marketplace-saddle-brown text-white">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex space-x-6">
              <Button variant="ghost" size="sm" className="text-white hover:bg-marketplace-warm-gray">
                <Icon name="Menu" className="h-4 w-4 mr-2" />
                Каталог
              </Button>
              <Button variant="ghost" size="sm" className="text-white hover:bg-marketplace-warm-gray">
                Бренды
              </Button>
              <Button variant="ghost" size="sm" className="text-white hover:bg-marketplace-warm-gray">
                Акции
              </Button>
              <Button variant="ghost" size="sm" className="text-white hover:bg-marketplace-warm-gray">
                Доставка
              </Button>
            </div>
            <div className="flex items-center space-x-4 text-sm">
              <span className="flex items-center">
                <Icon name="Shield" className="h-4 w-4 mr-1" />
                Безопасные сделки
              </span>
              <span className="flex items-center">
                <Icon name="Truck" className="h-4 w-4 mr-1" />
                Быстрая доставка
              </span>
            </div>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="mb-12">
          <div className="bg-gradient-to-r from-marketplace-deep-black to-marketplace-saddle-brown rounded-lg p-8 text-white">
            <div className="max-w-2xl">
              <h2 className="text-4xl font-bold mb-4">Лучшая электроника по выгодным ценам</h2>
              <p className="text-xl mb-6 text-gray-200">
                Смартфоны, ноутбуки, планшеты и аксессуары от проверенных продавцов
              </p>
              <Button size="lg" className="bg-marketplace-light-sand text-black hover:bg-yellow-400">
                <Icon name="Search" className="h-5 w-5 mr-2" />
                Начать покупки
              </Button>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="mb-12">
          <h3 className="text-2xl font-bold mb-6 text-marketplace-deep-black">Популярные категории</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer border-marketplace-saddle-brown/20">
                <CardContent className="p-6 text-center">
                  <Icon 
                    name={category.icon as any} 
                    className="h-8 w-8 mx-auto mb-3 text-marketplace-saddle-brown" 
                  />
                  <h4 className="font-semibold mb-1 text-marketplace-deep-black">{category.name}</h4>
                  <p className="text-sm text-gray-600">{category.count} товаров</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Featured Products */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold text-marketplace-deep-black">Рекомендуемые товары</h3>
            <Button variant="outline" className="border-marketplace-saddle-brown text-marketplace-saddle-brown hover:bg-marketplace-saddle-brown hover:text-white">
              Смотреть все
              <Icon name="ArrowRight" className="h-4 w-4 ml-2" />
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <Card key={product.id} className="hover:shadow-xl transition-shadow">
                <CardHeader className="p-0">
                  <div className="relative">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                    <Badge className="absolute top-2 left-2 bg-marketplace-light-sand text-black">
                      {product.badge}
                    </Badge>
                  </div>
                </CardHeader>
                
                <CardContent className="p-4">
                  <CardTitle className="text-lg mb-2 text-marketplace-deep-black">{product.name}</CardTitle>
                  
                  <div className="flex items-center mb-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Icon 
                          key={i}
                          name="Star" 
                          className={`h-4 w-4 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                        />
                      ))}
                      <span className="text-sm text-gray-600 ml-1">
                        {product.rating} ({product.reviews})
                      </span>
                    </div>
                  </div>
                  
                  <div className="mb-2">
                    <span className="text-lg font-bold text-marketplace-deep-black">{product.price}</span>
                    <span className="text-sm text-gray-500 line-through ml-2">{product.originalPrice}</span>
                  </div>
                  
                  <p className="text-sm text-gray-600">Продавец: {product.seller}</p>
                </CardContent>
                
                <CardFooter className="p-4 pt-0">
                  <Button 
                    onClick={() => addToCart(product.id)}
                    className="w-full bg-marketplace-saddle-brown hover:bg-marketplace-warm-gray"
                  >
                    <Icon name="ShoppingCart" className="h-4 w-4 mr-2" />
                    В корзину
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>

        {/* Stats */}
        <section className="bg-marketplace-deep-black text-white rounded-lg p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <h4 className="text-3xl font-bold text-marketplace-light-sand mb-2">10K+</h4>
              <p className="text-gray-300">Товаров</p>
            </div>
            <div>
              <h4 className="text-3xl font-bold text-marketplace-light-sand mb-2">500+</h4>
              <p className="text-gray-300">Продавцов</p>
            </div>
            <div>
              <h4 className="text-3xl font-bold text-marketplace-light-sand mb-2">24/7</h4>
              <p className="text-gray-300">Поддержка</p>
            </div>
            <div>
              <h4 className="text-3xl font-bold text-marketplace-light-sand mb-2">99%</h4>
              <p className="text-gray-300">Довольных клиентов</p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-marketplace-deep-black text-white mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h5 className="font-bold text-lg mb-4 text-marketplace-light-sand">SILK ROAD</h5>
              <p className="text-gray-400 text-sm">
                Надежный маркетплейс электроники с лучшими ценами и проверенными продавцами.
              </p>
            </div>
            <div>
              <h6 className="font-semibold mb-4">Покупателям</h6>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-marketplace-light-sand">Как сделать заказ</a></li>
                <li><a href="#" className="hover:text-marketplace-light-sand">Способы оплаты</a></li>
                <li><a href="#" className="hover:text-marketplace-light-sand">Доставка</a></li>
                <li><a href="#" className="hover:text-marketplace-light-sand">Возврат товара</a></li>
              </ul>
            </div>
            <div>
              <h6 className="font-semibold mb-4">Продавцам</h6>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-marketplace-light-sand">Стать продавцом</a></li>
                <li><a href="#" className="hover:text-marketplace-light-sand">Правила торговли</a></li>
                <li><a href="#" className="hover:text-marketplace-light-sand">Комиссии</a></li>
                <li><a href="#" className="hover:text-marketplace-light-sand">Поддержка</a></li>
              </ul>
            </div>
            <div>
              <h6 className="font-semibold mb-4">Контакты</h6>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="flex items-center">
                  <Icon name="Phone" className="h-4 w-4 mr-2" />
                  8 800 555-35-35
                </li>
                <li className="flex items-center">
                  <Icon name="Mail" className="h-4 w-4 mr-2" />
                  support@silkroad.ru
                </li>
                <li className="flex items-center">
                  <Icon name="Clock" className="h-4 w-4 mr-2" />
                  24/7
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-marketplace-saddle-brown mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2024 Silk Road Marketplace. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;