import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    'Books & Media',
    'Cannabis',
    'Counterfeit',
    'Digital Goods',
    'Documents',
    'Drugs',
    'Electronics',
    'Erotica',
    'Jewelry',
    'Money',
    'Other',
    'Services',
    'Weapons'
  ];

  const featuredListings = [
    {
      id: 1,
      title: 'Premium Quality Product',
      seller: 'TrustedVendor',
      price: '$25.00',
      rating: '★★★★★',
      reviews: 42,
      shipped: 'Ships from: Netherlands',
      category: 'Digital Goods'
    },
    {
      id: 2,
      title: 'High Grade Material',
      seller: 'ReliableSource',
      price: '$150.00',
      rating: '★★★★☆',
      reviews: 18,
      shipped: 'Ships from: Germany',
      category: 'Other'
    },
    {
      id: 3,
      title: 'Express Service Available',
      seller: 'FastDelivery',
      price: '$75.00',
      rating: '★★★★★',
      reviews: 156,
      shipped: 'Ships from: USA',
      category: 'Services'
    },
    {
      id: 4,
      title: 'Bulk Discount Available',
      seller: 'BulkSupplier',
      price: '$200.00',
      rating: '★★★★☆',
      reviews: 23,
      shipped: 'Ships from: Canada',
      category: 'Electronics'
    }
  ];

  const vendors = [
    { name: 'TrustedVendor', rating: '★★★★★', deals: 342, joined: 'Jan 2013' },
    { name: 'ReliableSource', rating: '★★★★☆', deals: 156, joined: 'Mar 2013' },
    { name: 'FastDelivery', rating: '★★★★★', deals: 89, joined: 'Feb 2013' },
    { name: 'BulkSupplier', rating: '★★★★☆', deals: 67, joined: 'Apr 2013' }
  ];

  return (
    <div className="min-h-screen bg-silkroad-light-gray">
      {/* Header */}
      <header className="bg-silkroad-dark-bg text-white border-b border-silkroad-border">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-6">
              <h1 className="text-xl font-bold">Silk Road</h1>
              <nav className="hidden md:flex space-x-4 text-sm">
                <a href="#" className="text-silkroad-header-gray hover:text-white">Home</a>
                <a href="#" className="text-silkroad-header-gray hover:text-white">Listings</a>
                <a href="#" className="text-silkroad-header-gray hover:text-white">Vendors</a>
                <a href="#" className="text-silkroad-header-gray hover:text-white">Forums</a>
                <a href="#" className="text-silkroad-header-gray hover:text-white">Help</a>
              </nav>
            </div>
            
            <div className="flex items-center space-x-4 text-sm">
              <span className="text-silkroad-header-gray">Welcome, anonymous</span>
              <a href="#" className="text-silkroad-link-blue hover:underline">Login</a>
              <a href="#" className="text-silkroad-link-blue hover:underline">Register</a>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation Bar */}
      <nav className="bg-silkroad-nav-bg text-white">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center justify-between text-sm">
            <div className="flex space-x-4">
              <a href="#" className="hover:text-silkroad-header-gray">Browse Listings</a>
              <a href="#" className="hover:text-silkroad-header-gray">Search Vendors</a>
              <a href="#" className="hover:text-silkroad-header-gray">Recent Reviews</a>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-silkroad-header-gray">Online:</span>
              <span className="text-green-400">2,847 users</span>
            </div>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Search */}
            <Card className="mb-6 bg-silkroad-card-bg border-silkroad-border">
              <CardHeader className="pb-3">
                <h3 className="font-semibold text-silkroad-text-primary">Search Listings</h3>
              </CardHeader>
              <CardContent className="space-y-3">
                <Input
                  placeholder="Search for items..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="text-sm"
                />
                <Button className="w-full bg-silkroad-button-green hover:bg-green-600 text-white text-sm">
                  Search
                </Button>
              </CardContent>
            </Card>

            {/* Categories */}
            <Card className="mb-6 bg-silkroad-card-bg border-silkroad-border">
              <CardHeader className="pb-3">
                <h3 className="font-semibold text-silkroad-text-primary">Categories</h3>
              </CardHeader>
              <CardContent className="p-0">
                <div className="space-y-1">
                  {categories.map((category, index) => (
                    <a
                      key={index}
                      href="#"
                      className="block px-4 py-2 text-sm text-silkroad-link-blue hover:bg-gray-100 border-b border-gray-200 last:border-b-0"
                    >
                      {category}
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Top Vendors */}
            <Card className="bg-silkroad-card-bg border-silkroad-border">
              <CardHeader className="pb-3">
                <h3 className="font-semibold text-silkroad-text-primary">Top Vendors</h3>
              </CardHeader>
              <CardContent className="space-y-3">
                {vendors.map((vendor, index) => (
                  <div key={index} className="border-b border-gray-200 pb-2 last:border-b-0">
                    <div className="flex justify-between items-start">
                      <div>
                        <a href="#" className="font-medium text-silkroad-link-blue hover:underline text-sm">
                          {vendor.name}
                        </a>
                        <div className="text-xs text-silkroad-text-secondary">
                          {vendor.rating} ({vendor.deals} deals)
                        </div>
                        <div className="text-xs text-silkroad-text-secondary">
                          Joined: {vendor.joined}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mb-6">
              <Card className="bg-silkroad-card-bg border-silkroad-border text-center p-4">
                <div className="text-2xl font-bold text-silkroad-text-primary">1,247</div>
                <div className="text-sm text-silkroad-text-secondary">Active Listings</div>
              </Card>
              <Card className="bg-silkroad-card-bg border-silkroad-border text-center p-4">
                <div className="text-2xl font-bold text-silkroad-text-primary">89</div>
                <div className="text-sm text-silkroad-text-secondary">Trusted Vendors</div>
              </Card>
              <Card className="bg-silkroad-card-bg border-silkroad-border text-center p-4">
                <div className="text-2xl font-bold text-silkroad-text-primary">2,847</div>
                <div className="text-sm text-silkroad-text-secondary">Users Online</div>
              </Card>
            </div>

            {/* Welcome Message */}
            <Card className="mb-6 bg-silkroad-card-bg border-silkroad-border">
              <CardContent className="p-6">
                <h2 className="text-xl font-bold mb-3 text-silkroad-text-primary">
                  Welcome to Silk Road
                </h2>
                <p className="text-silkroad-text-secondary text-sm leading-relaxed mb-4">
                  Silk Road is an anonymous marketplace. Browse listings from our trusted vendors 
                  offering a wide variety of products. All transactions are conducted using Bitcoin 
                  for maximum privacy and security.
                </p>
                <div className="bg-yellow-50 border border-yellow-200 p-3 rounded text-sm">
                  <strong className="text-yellow-800">Security Notice:</strong>
                  <span className="text-yellow-700 ml-1">
                    Always use Tor browser and verify vendor ratings before making purchases.
                  </span>
                </div>
              </CardContent>
            </Card>

            {/* Featured Listings */}
            <Card className="bg-silkroad-card-bg border-silkroad-border">
              <CardHeader>
                <div className="flex justify-between items-center">
                  <h3 className="font-semibold text-silkroad-text-primary">Featured Listings</h3>
                  <Button variant="outline" size="sm" className="text-silkroad-link-blue border-silkroad-border">
                    View All
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {featuredListings.map((listing) => (
                    <div key={listing.id} className="border border-silkroad-border rounded-lg p-4 hover:bg-gray-50">
                      <div className="flex justify-between items-start mb-2">
                        <div className="flex-1">
                          <h4 className="font-medium text-silkroad-text-primary hover:text-silkroad-link-blue cursor-pointer">
                            {listing.title}
                          </h4>
                          <div className="flex items-center space-x-2 mt-1">
                            <span className="text-sm text-silkroad-text-secondary">by</span>
                            <a href="#" className="text-sm text-silkroad-link-blue hover:underline">
                              {listing.seller}
                            </a>
                            <Badge variant="outline" className="text-xs border-silkroad-border">
                              {listing.category}
                            </Badge>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="font-bold text-silkroad-text-primary">{listing.price}</div>
                          <div className="text-xs text-silkroad-text-secondary">{listing.rating}</div>
                        </div>
                      </div>
                      <div className="flex justify-between items-center text-xs text-silkroad-text-secondary">
                        <span>{listing.shipped}</span>
                        <span>{listing.reviews} reviews</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-silkroad-nav-bg text-white mt-12">
        <div className="container mx-auto px-4 py-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
            <div>
              <h5 className="font-semibold mb-3">Security</h5>
              <ul className="space-y-2 text-silkroad-header-gray">
                <li><a href="#" className="hover:text-white">Tor Browser Required</a></li>
                <li><a href="#" className="hover:text-white">Bitcoin Tumbling</a></li>
                <li><a href="#" className="hover:text-white">PGP Encryption</a></li>
                <li><a href="#" className="hover:text-white">Security Tips</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-3">Marketplace</h5>
              <ul className="space-y-2 text-silkroad-header-gray">
                <li><a href="#" className="hover:text-white">Vendor Guidelines</a></li>
                <li><a href="#" className="hover:text-white">Buyer Protection</a></li>
                <li><a href="#" className="hover:text-white">Dispute Resolution</a></li>
                <li><a href="#" className="hover:text-white">Fee Structure</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-3">Support</h5>
              <ul className="space-y-2 text-silkroad-header-gray">
                <li><a href="#" className="hover:text-white">Forum Help</a></li>
                <li><a href="#" className="hover:text-white">Contact Staff</a></li>
                <li><a href="#" className="hover:text-white">Technical Issues</a></li>
                <li><a href="#" className="hover:text-white">Account Problems</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-600 mt-6 pt-4 text-center text-silkroad-header-gray text-xs">
            <p>© 2013 Silk Road. All transactions are final. Use at your own risk.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;