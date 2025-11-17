import React from 'react';
import { View, Text, ScrollView, StyleSheet, Linking } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function HomeScreen() {
  const quickActions = [
    {
      title: 'Ligar Emergência',
      icon: 'call',
      color: '#FF3B30',
      action: () => Linking.openURL('tel:192')
    },
    {
      title: 'Hospitais Próximos',
      icon: 'location',
      color: '#34C759',
      action: () => console.log('Abrir mapa')
    },
    {
      title: 'Contatos de Emergência',
      icon: 'people',
      color: '#5856D6',
      action: () => console.log('Abrir contatos')
    }
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Primeiros Socorros</Text>
        <Text style={styles.subtitle}>Assistência médica rápida e eficiente</Text>
      </View>

      <View style={styles.quickActions}>
        {quickActions.map((action, index) => (
          <View key={index} style={styles.actionCard}>
            <Ionicons 
              name={action.icon} 
              size={28} 
              color={action.color} 
            />
            <Text style={styles.actionText}>{action.title}</Text>
          </View>
        ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Dicas Rápidas</Text>
        <View style={styles.tipsCard}>
          <Text style={styles.tip}>• Mantenha a calma em emergências</Text>
          <Text style={styles.tip}>• Verifique segurança do local primeiro</Text>
          <Text style={styles.tip}>• Ligue 192 antes de qualquer procedimento</Text>
          <Text style={styles.tip}>• Use luvas de proteção se disponível</Text>
        </View>
      </View>

      <View style={styles.emergencyContact}>
        <Text style={styles.contactTitle}>Números de Emergência</Text>
        <View style={styles.contactList}>
          <Text style={styles.contactItem}>🚑 SAMU: 192</Text>
          <Text style={styles.contactItem}>🚒 Bombeiros: 193</Text>
          <Text style={styles.contactItem}>🚔 Polícia: 190</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    padding: 20,
    backgroundColor: 'white',
    marginBottom: 10,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginTop: 5,
  },
  quickActions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 20,
    backgroundColor: 'white',
    marginBottom: 10,
  },
  actionCard: {
    alignItems: 'center',
  },
  actionText: {
    marginTop: 8,
    fontSize: 12,
    fontWeight: '500',
    textAlign: 'center',
  },
  section: {
    backgroundColor: 'white',
    margin: 10,
    padding: 15,
    borderRadius: 12,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  tipsCard: {
    backgroundColor: '#f8f8f8',
    padding: 15,
    borderRadius: 8,
  },
  tip: {
    fontSize: 16,
    marginBottom: 8,
    color: '#333',
  },
  emergencyContact: {
    backgroundColor: 'white',
    margin: 10,
    padding: 15,
    borderRadius: 12,
  },
  contactTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  contactList: {
    backgroundColor: '#f0f8ff',
    padding: 15,
    borderRadius: 8,
  },
  contactItem: {
    fontSize: 16,
    marginBottom: 8,
    fontWeight: '500',
  },
});