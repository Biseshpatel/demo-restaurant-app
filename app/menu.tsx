
import React, { useState } from 'react';
import { Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { commonStyles, colors } from '../styles/commonStyles';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import Icon from '../components/Icon';

interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  category: string;
}

const menuItems: MenuItem[] = [
  // Appetizers
  {
    id: '1',
    name: 'Bruschetta',
    description: 'Toasted bread with fresh tomatoes, basil, and garlic',
    price: '$8.99',
    category: 'appetizers'
  },
  {
    id: '2',
    name: 'Antipasto Platter',
    description: 'Selection of cured meats, cheeses, and olives',
    price: '$14.99',
    category: 'appetizers'
  },
  {
    id: '3',
    name: 'Calamari Fritti',
    description: 'Crispy fried squid rings with marinara sauce',
    price: '$12.99',
    category: 'appetizers'
  },
  
  // Main Courses
  {
    id: '4',
    name: 'Margherita Pizza',
    description: 'Fresh mozzarella, basil, and our signature tomato sauce',
    price: '$18.99',
    category: 'mains'
  },
  {
    id: '5',
    name: 'Pasta Carbonara',
    description: 'Creamy pasta with pancetta, eggs, and parmesan cheese',
    price: '$16.99',
    category: 'mains'
  },
  {
    id: '6',
    name: 'Osso Buco',
    description: 'Braised veal shanks with risotto milanese',
    price: '$28.99',
    category: 'mains'
  },
  {
    id: '7',
    name: 'Seafood Risotto',
    description: 'Creamy arborio rice with mixed seafood and saffron',
    price: '$24.99',
    category: 'mains'
  },
  
  // Desserts
  {
    id: '8',
    name: 'Tiramisu',
    description: 'Classic Italian dessert with coffee and mascarpone',
    price: '$7.99',
    category: 'desserts'
  },
  {
    id: '9',
    name: 'Panna Cotta',
    description: 'Vanilla custard with berry compote',
    price: '$6.99',
    category: 'desserts'
  },
  {
    id: '10',
    name: 'Gelato',
    description: 'Choice of vanilla, chocolate, or pistachio',
    price: '$5.99',
    category: 'desserts'
  }
];

const categories = [
  { id: 'all', name: 'All', icon: 'grid' },
  { id: 'appetizers', name: 'Appetizers', icon: 'leaf' },
  { id: 'mains', name: 'Main Courses', icon: 'restaurant' },
  { id: 'desserts', name: 'Desserts', icon: 'ice-cream' }
];

export default function MenuScreen() {
  console.log('MenuScreen rendered');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const navigateHome = () => {
    console.log('Navigating to home');
    router.push('/');
  };

  const navigateToContact = () => {
    console.log('Navigating to contact');
    router.push('/contact');
  };

  const filteredItems = selectedCategory === 'all' 
    ? menuItems 
    : menuItems.filter(item => item.category === selectedCategory);

  return (
    <SafeAreaView style={commonStyles.container}>
      {/* Header */}
      <View style={commonStyles.headerContainer}>
        <TouchableOpacity onPress={() => router.back()}>
          <Icon name="arrow-back" size={24} color={colors.text} />
        </TouchableOpacity>
        <Text style={[commonStyles.subtitle, { margin: 0 }]}>Our Menu</Text>
        <View style={{ width: 24 }} />
      </View>

      <ScrollView style={commonStyles.content} showsVerticalScrollIndicator={false}>
        {/* Categories */}
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false}
          style={{ paddingVertical: 16 }}
          contentContainerStyle={{ paddingHorizontal: 12 }}
        >
          {categories.map((category) => (
            <TouchableOpacity
              key={category.id}
              style={[
                commonStyles.categoryCard,
                {
                  backgroundColor: selectedCategory === category.id ? colors.primary : colors.backgroundAlt,
                }
              ]}
              onPress={() => {
                console.log(`Selected category: ${category.id}`);
                setSelectedCategory(category.id);
              }}
            >
              <Icon 
                name={category.icon as any} 
                size={20} 
                color={selectedCategory === category.id ? colors.background : colors.text} 
              />
              <Text style={{
                color: selectedCategory === category.id ? colors.background : colors.text,
                fontSize: 12,
                fontWeight: '600',
                marginTop: 4,
              }}>
                {category.name}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Menu Items */}
        <View style={commonStyles.section}>
          {filteredItems.map((item) => (
            <View key={item.id} style={commonStyles.menuCard}>
              <View style={{
                width: 60,
                height: 60,
                backgroundColor: colors.backgroundAlt,
                borderRadius: 8,
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: 16,
              }}>
                <Icon 
                  name={item.category === 'appetizers' ? 'leaf' : 
                        item.category === 'mains' ? 'restaurant' : 'ice-cream'} 
                  size={24} 
                  color={colors.primary} 
                />
              </View>
              
              <View style={{ flex: 1 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <Text style={[commonStyles.text, { fontWeight: '600', flex: 1 }]}>
                    {item.name}
                  </Text>
                  <Text style={commonStyles.priceText}>
                    {item.price}
                  </Text>
                </View>
                <Text style={[commonStyles.textLight, { marginTop: 4 }]}>
                  {item.description}
                </Text>
              </View>
            </View>
          ))}
        </View>

        <View style={{ height: 100 }} />
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={commonStyles.bottomNav}>
        <TouchableOpacity style={commonStyles.bottomNavItem} onPress={navigateHome}>
          <Icon name="home" size={24} color={colors.text} />
          <Text style={commonStyles.bottomNavText}>Home</Text>
        </TouchableOpacity>
        
        <View style={commonStyles.bottomNavItem}>
          <Icon name="book" size={24} color={colors.primary} />
          <Text style={commonStyles.bottomNavTextActive}>Menu</Text>
        </View>
        
        <TouchableOpacity style={commonStyles.bottomNavItem} onPress={navigateToContact}>
          <Icon name="location" size={24} color={colors.text} />
          <Text style={commonStyles.bottomNavText}>Contact</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
