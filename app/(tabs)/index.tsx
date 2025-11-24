import React from 'react';
import { View, Text, ScrollView, StyleSheet, Linking } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function HomeScreen() {
  const quickActions = [
    { title: 'Ligar Emergência', icon: 'call', color: '#FF3B30', action: () => Linking.openURL('tel:192') },
    { title: 'Hospitais Próximos', icon: 'location', color: '#34C759', action: () => console.log('Abrir mapa') },
    { title: 'Contatos de Emergência', icon: 'people', color: '#5856D6', action: () => console.log('Abrir contatos') },
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
            <Ionicons name={action.icon as any} size={28} color={action.color} />
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
  container: { flex: 1, backgroundColor: '#fff' },
  header: { padding: 20, paddingTop: 28 },
  title: { fontSize: 28, fontWeight: '800', marginBottom: 4 },
  subtitle: { fontSize: 14, color: '#6b7280' },

  quickActions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 12,
    marginTop: 12,
  },
  actionCard: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F3F4F6',
    borderRadius: 12,
    width: 110,
    height: 90,
    padding: 12,
  },
  actionText: { marginTop: 8, fontWeight: '600', textAlign: 'center' },

  section: { paddingHorizontal: 20, marginTop: 16 },
  sectionTitle: { fontSize: 18, fontWeight: '700', marginBottom: 8 },
  tipsCard: { backgroundColor: '#F9FAFB', padding: 16, borderRadius: 12 },
  tip: { marginBottom: 6, color: '#374151' },

  emergencyContact: { paddingHorizontal: 20, marginTop: 16, marginBottom: 24 },
  contactTitle: { fontSize: 18, fontWeight: '700', marginBottom: 8 },
  contactList: { backgroundColor: '#F3F4F6', padding: 16, borderRadius: 12 },
  contactItem: { marginBottom: 4, fontSize: 16 },
});