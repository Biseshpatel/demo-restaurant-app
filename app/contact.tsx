
import React from 'react';
import { Text, View, ScrollView, TouchableOpacity, Linking } from 'react-native';
import { commonStyles, colors } from '../styles/commonStyles';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import Icon from '../components/Icon';

export default function ContactScreen() {
  console.log('ContactScreen rendered');

  const navigateHome = () => {
    console.log('Navigating to home');
    router.push('/');
  };

  const navigateToMenu = () => {
    console.log('Navigating to menu');
    router.push('/menu');
  };

  const handleCall = () => {
    console.log('Opening phone dialer');
    Linking.openURL('tel:+1234567890');
  };

  const handleEmail = () => {
    console.log('Opening email client');
    Linking.openURL('mailto:info@bellavista.com');
  };

  const handleDirections = () => {
    console.log('Opening maps for directions');
    const address = '123 Main Street, City, State 12345';
    const url = `https://maps.google.com/?q=${encodeURIComponent(address)}`;
    Linking.openURL(url);
  };

  return (
    <SafeAreaView style={commonStyles.container}>
      {/* Header */}
      <View style={commonStyles.headerContainer}>
        <TouchableOpacity onPress={() => router.back()}>
          <Icon name="arrow-back" size={24} color={colors.text} />
        </TouchableOpacity>
        <Text style={[commonStyles.subtitle, { margin: 0 }]}>Contact & Info</Text>
        <View style={{ width: 24 }} />
      </View>

      <ScrollView style={commonStyles.content} showsVerticalScrollIndicator={false}>
        {/* Restaurant Info */}
        <View style={commonStyles.section}>
          <View style={{ alignItems: 'center', marginBottom: 24 }}>
            <View style={{
              width: 80,
              height: 80,
              backgroundColor: colors.primary,
              borderRadius: 40,
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: 16,
            }}>
              <Icon name="restaurant" size={40} color={colors.background} />
            </View>
            <Text style={[commonStyles.title, { fontSize: 24, color: colors.primary }]}>
              Bella Vista
            </Text>
            <Text style={[commonStyles.textLight, { textAlign: 'center' }]}>
              Authentic Italian Cuisine
            </Text>
          </View>
        </View>

        {/* Contact Information */}
        <View style={commonStyles.section}>
          <Text style={[commonStyles.subtitle, { marginBottom: 16 }]}>
            Get in Touch
          </Text>

          <TouchableOpacity 
            style={[commonStyles.card, { flexDirection: 'row', alignItems: 'center' }]}
            onPress={handleCall}
          >
            <View style={{
              width: 50,
              height: 50,
              backgroundColor: colors.success,
              borderRadius: 25,
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: 16,
            }}>
              <Icon name="call" size={24} color={colors.background} />
            </View>
            <View style={{ flex: 1 }}>
              <Text style={[commonStyles.text, { fontWeight: '600' }]}>
                Phone
              </Text>
              <Text style={commonStyles.textLight}>
                (123) 456-7890
              </Text>
            </View>
            <Icon name="chevron-forward" size={20} color={colors.textLight} />
          </TouchableOpacity>

          <TouchableOpacity 
            style={[commonStyles.card, { flexDirection: 'row', alignItems: 'center' }]}
            onPress={handleEmail}
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
              <Icon name="mail" size={24} color={colors.background} />
            </View>
            <View style={{ flex: 1 }}>
              <Text style={[commonStyles.text, { fontWeight: '600' }]}>
                Email
              </Text>
              <Text style={commonStyles.textLight}>
                info@bellavista.com
              </Text>
            </View>
            <Icon name="chevron-forward" size={20} color={colors.textLight} />
          </TouchableOpacity>
        </View>

        {/* Location */}
        <View style={commonStyles.section}>
          <Text style={[commonStyles.subtitle, { marginBottom: 16 }]}>
            Visit Us
          </Text>

          <TouchableOpacity 
            style={[commonStyles.card, { flexDirection: 'row', alignItems: 'center' }]}
            onPress={handleDirections}
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
              <Icon name="location" size={24} color={colors.background} />
            </View>
            <View style={{ flex: 1 }}>
              <Text style={[commonStyles.text, { fontWeight: '600' }]}>
                Address
              </Text>
              <Text style={commonStyles.textLight}>
                123 Main Street{'\n'}
                City, State 12345
              </Text>
            </View>
            <Icon name="chevron-forward" size={20} color={colors.textLight} />
          </TouchableOpacity>

          <View style={[commonStyles.card, { backgroundColor: colors.backgroundAlt }]}>
            <Text style={[commonStyles.text, { fontWeight: '600', marginBottom: 8, textAlign: 'center' }]}>
              Maps Not Available
            </Text>
            <Text style={[commonStyles.textLight, { textAlign: 'center' }]}>
              react-native-maps is not supported in Natively right now.{'\n'}
              Please use the address above to find us on your preferred maps app.
            </Text>
          </View>
        </View>

        {/* Hours */}
        <View style={commonStyles.section}>
          <Text style={[commonStyles.subtitle, { marginBottom: 16 }]}>
            Opening Hours
          </Text>

          <View style={commonStyles.card}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 8 }}>
              <Text style={commonStyles.text}>Monday - Thursday</Text>
              <Text style={[commonStyles.text, { fontWeight: '600' }]}>11:00 AM - 10:00 PM</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 8 }}>
              <Text style={commonStyles.text}>Friday - Saturday</Text>
              <Text style={[commonStyles.text, { fontWeight: '600' }]}>11:00 AM - 11:00 PM</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text style={commonStyles.text}>Sunday</Text>
              <Text style={[commonStyles.text, { fontWeight: '600' }]}>12:00 PM - 9:00 PM</Text>
            </View>
          </View>
        </View>

        {/* About */}
        <View style={commonStyles.section}>
          <Text style={[commonStyles.subtitle, { marginBottom: 16 }]}>
            About Us
          </Text>

          <View style={commonStyles.card}>
            <Text style={[commonStyles.text, { lineHeight: 24 }]}>
              Bella Vista has been serving authentic Italian cuisine for over 20 years. 
              Our family recipes have been passed down through generations, and we take 
              pride in using only the freshest ingredients imported directly from Italy.
              {'\n\n'}
              Come experience the warmth of Italian hospitality and the rich flavors 
              that have made us a beloved part of the community.
            </Text>
          </View>
        </View>

        <View style={{ height: 100 }} />
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={commonStyles.bottomNav}>
        <TouchableOpacity style={commonStyles.bottomNavItem} onPress={navigateHome}>
          <Icon name="home" size={24} color={colors.text} />
          <Text style={commonStyles.bottomNavText}>Home</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={commonStyles.bottomNavItem} onPress={navigateToMenu}>
          <Icon name="book" size={24} color={colors.text} />
          <Text style={commonStyles.bottomNavText}>Menu</Text>
        </TouchableOpacity>
        
        <View style={commonStyles.bottomNavItem}>
          <Icon name="location" size={24} color={colors.primary} />
          <Text style={commonStyles.bottomNavTextActive}>Contact</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
