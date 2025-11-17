import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';

export default function ExploreScreen() {
  const emergencyItems = [
    {
      id: 1,
      title: 'Parada Cardíaca',
      icon: 'heart',
      color: '#FF3B30',
    },
    {
      id: 2,
      title: 'Engasgo',
      icon: 'warning',
      color: '#FF9500',
    },
    {
      id: 3,
      title: 'Queimaduras',
      icon: 'flame',
      color: '#FFCC00',
    },
    {
      id: 4,
      title: 'Cortes',
      icon: 'medkit',
      color: '#34C759',
    },
    {
      id: 5,
      title: 'Fraturas',
      icon: 'body',
      color: '#5856D6',
    },
    {
      id: 6,
      title: 'Desmaio',
      icon: 'eye-off',
      color: '#AF52DE',
    },
    {
      id: 7,
      title: 'Convulsões',
      icon: 'pulse',
      color: '#FF2D55',
    },
    {
      id: 8,
      title: 'Intoxicação',
      icon: 'skull',
      color: '#8E8E93',
    }
  ];

  const handleEmergencyPress = (emergencyType: string) => {
    router.push({
      pathname: '/emergency-modal',
      params: { type: emergencyType }
    });
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Procedimentos de Emergência</Text>
        <Text style={styles.subtitle}>Selecione uma situação para ver os procedimentos</Text>
      </View>

      <View style={styles.emergencyGrid}>
        {emergencyItems.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={[styles.emergencyCard, { backgroundColor: item.color }]}
            onPress={() => handleEmergencyPress(item.title)}
          >
            <Ionicons name={item.icon} size={32} color="white" />
            <Text style={styles.cardText}>{item.title}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.warning}>
        <Ionicons name="warning" size={24} color="#FF9500" />
        <Text style={styles.warningText}>
          Em caso de emergência real, ligue imediatamente para 192
        </Text>
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
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginTop: 5,
  },
  emergencyGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 10,
    justifyContent: 'space-between',
  },
  emergencyCard: {
    width: '48%',
    height: 120,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    padding: 10,
  },
  cardText: {
    color: 'white',
    fontWeight: 'bold',
    marginTop: 8,
    textAlign: 'center',
  },
  warning: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF3CD',
    margin: 10,
    padding: 15,
    borderRadius: 8,
    borderLeftWidth: 4,
    borderLeftColor: '#FFA000',
  },
  warningText: {
    color: '#856404',
    fontSize: 14,
    marginLeft: 10,
    flex: 1,
  },
});