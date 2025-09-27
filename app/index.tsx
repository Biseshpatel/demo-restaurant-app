
import React from 'react';
import { Text, View, ScrollView, TouchableOpacity, Image } from 'react-native';
import { commonStyles, colors } from '../styles/commonStyles';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import Icon from '../components/Icon';

export default function HomeScreen() {
  console.log('HomeScreen rendered');

  const navigateToMenu = () => {
    console.log('Navigating to menu');
    router.push('/menu');
  };

  const navigateToContact = () => {
    console.log('Navigating to contact');
    router.push('/contact');
  };

  return (
    <SafeAreaView style={commonStyles.container}>
      <ScrollView style={commonStyles.content} showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={{ alignItems: 'center', paddingVertical: 40, paddingHorizontal: 20 }}>
          <View style={{
            width: 120,
            height: 120,
            backgroundColor: colors.primary,
            borderRadius: 60,
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 24,
          }}>
            <Icon name="restaurant" size={60} color={colors.background} />
          </View>
          
          <Text style={[commonStyles.title, { fontSize: 32, color: colors.primary }]}>
            Bella Vista
          </Text>
          <Text style={[commonStyles.text, { textAlign: 'center', marginTop: 8 }]}>
            Authentic Italian Cuisine
          </Text>
          <Text style={[commonStyles.textLight, { textAlign: 'center', marginTop: 4 }]}>
            Experience the taste of Italy in every bite
          </Text>
        </View>

        {/* Welcome Message */}
        <View style={commonStyles.section}>
          <View style={commonStyles.card}>
            <Text style={[commonStyles.subtitle, { textAlign: 'center', color: colors.secondary }]}>
              Welcome to Our Restaurant
            </Text>
            <Text style={[commonStyles.text, { textAlign: 'center', marginTop: 8 }]}>
              We serve fresh, authentic Italian dishes made with the finest ingredients. 
              From traditional pasta to wood-fired pizzas, every meal is crafted with passion.
            </Text>
          </View>
        </View>

        {/* Quick Actions */}
        <View style={commonStyles.section}>
          <Text style={[commonStyles.subtitle, { marginBottom: 16 }]}>
            Explore
          </Text>
          
          <TouchableOpacity 
            style={[commonStyles.card, { flexDirection: 'row', alignItems: 'center' }]}
            onPress={navigateToMenu}
          >
            <View style={{
              width: 50,
              height: 50,
              backgroundColor: colors.primary,
              borderRadius: 25,
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: 16,
            }}>
              <Icon name="book" size={24} color={colors.background} />
            </View>
            <View style={{ flex: 1 }}>
              <Text style={[commonStyles.text, { fontWeight: '600' }]}>
                View Our Menu
              </Text>
              <Text style={commonStyles.textLight}>
                Discover our delicious dishes and specialties
              </Text>
            </View>
            <Icon name="chevron-forward" size={20} color={colors.textLight} />
          </TouchableOpacity>

          <TouchableOpacity 
            style={[commonStyles.card, { flexDirection: 'row', alignItems: 'center' }]}
            onPress={navigateToContact}
          >
            <View style={{
              width: 50,
              height: 50,
              backgroundColor: colors.accent,
              borderRadius: 25,
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: 16,
            }}>
              <Icon name="location" size={24} color={colors.background} />
            </View>
            <View style={{ flex: 1 }}>
              <Text style={[commonStyles.text, { fontWeight: '600' }]}>
                Visit Us
              </Text>
              <Text style={commonStyles.textLight}>
                Find our location and contact information
              </Text>
            </View>
            <Icon name="chevron-forward" size={20} color={colors.textLight} />
          </TouchableOpacity>
        </View>

        {/* Featured Items */}
        <View style={commonStyles.section}>
          <Text style={[commonStyles.subtitle, { marginBottom: 16 }]}>
            Today&apos;s Specials
          </Text>
          
          <View style={commonStyles.card}>
            <Text style={[commonStyles.text, { fontWeight: '600', marginBottom: 8 }]}>
              Margherita Pizza
            </Text>
            <Text style={commonStyles.textLight}>
              Fresh mozzarella, basil, and our signature tomato sauce
            </Text>
            <Text style={[commonStyles.priceText, { marginTop: 8 }]}>
              $18.99
            </Text>
          </View>

          <View style={commonStyles.card}>
            <Text style={[commonStyles.text, { fontWeight: '600', marginBottom: 8 }]}>
              Pasta Carbonara
            </Text>
            <Text style={commonStyles.textLight}>
              Creamy pasta with pancetta, eggs, and parmesan cheese
            </Text>
            <Text style={[commonStyles.priceText, { marginTop: 8 }]}>
              $16.99
            </Text>
          </View>
        </View>

        <View style={{ height: 100 }} />
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={commonStyles.bottomNav}>
        <View style={commonStyles.bottomNavItem}>
          <Icon name="home" size={24} color={colors.primary} />
          <Text style={commonStyles.bottomNavTextActive}>Home</Text>
        </View>
        
        <TouchableOpacity style={commonStyles.bottomNavItem} onPress={navigateToMenu}>
          <Icon name="book" size={24} color={colors.text} />
          <Text style={commonStyles.bottomNavText}>Menu</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={commonStyles.bottomNavItem} onPress={navigateToContact}>
          <Icon name="location" size={24} color={colors.text} />
          <Text style={commonStyles.bottomNavText}>Contact</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
