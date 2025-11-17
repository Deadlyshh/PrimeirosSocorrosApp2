import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useLocalSearchParams, router } from 'expo-router';

export default function EmergencyModal() {
  const { type } = useLocalSearchParams();

  const emergencyProcedures = {
    'Parada Cardíaca': [
      'Verifique a segurança do local',
      'Cheque a respiração da pessoa',
      'Ligue para emergência (192)',
      'Inicie compressões torácicas (100-120/min)',
      'Use DEA se disponível',
      'Continue até ajuda chegar'
    ],
    'Engasgo': [
      'Incentive a tossir fortemente',
      'Aplique 5 golpes nas costas',
      'Realize a Manobra de Heimlich',
      'Repita os ciclos se necessário',
      'Se perder consciência, inicie RCP',
      'Busque ajuda médica imediatamente'
    ],
    'Queimaduras': [
      'Resfrie com água corrente por 10-15 min',
      'Não use gelo diretamente',
      'Cubra com pano limpo e úmido',
      'Não estoure bolhas',
      'Não passe produtos caseiros',
      'Procure atendimento médico'
    ],
    'Cortes': [
      'Lave as mãos antes de ajudar',
      'Aplique pressão direta no ferimento',
      'Eleve o membro afetado',
      'Limpe com água e sabão',
      'Aplique curativo estéril',
      'Procure sutura se necessário'
    ],
    'Fraturas': [
      'Imobilize a área afetada',
      'Não tente endireitar o osso',
      'Aplique compressa fria',
      'Mantenha a vítima calma',
      'Não dê alimentos ou líquidos',
      'Encaminhe ao hospital'
    ],
    'Desmaio': [
      'Deite a pessoa de costas',
      'Eleve as pernas 30cm',
      'Afrouxe roupas apertadas',
      'Verifique vias aéreas',
      'Não ofereça alimentos',
      'Observe sinais vitais'
    ],
    'Convulsões': [
      'Afaste objetos perigosos',
      'Proteja a cabeça da pessoa',
      'Não restrinja os movimentos',
      'Não coloque nada na boca',
      'Coloque de lado após a crise',
      'Chame ajuda médica'
    ],
    'Intoxicação': [
      'Identifique a substância',
      'Não induza vômito',
      'Ligue para o CIT: 0800 722 6001',
      'Mantenha a vítima calma',
      'Leve a embalagem ao hospital',
      'Procure atendimento urgente'
    ]
  };

  const procedures = emergencyProcedures[type as string] || ['Procedimento não encontrado.'];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <Ionicons name="close" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.title}>{type}</Text>
      </View>
      
      <ScrollView style={styles.content}>
        <Text style={styles.sectionTitle}>Procedimento:</Text>
        {procedures.map((step, index) => (
          <View key={index} style={styles.stepCard}>
            <Text style={styles.stepNumber}>{index + 1}</Text>
            <Text style={styles.stepText}>{step}</Text>
          </View>
        ))}

        <View style={styles.warning}>
          <Text style={styles.warningTitle}>⚠️ AVISO IMPORTANTE</Text>
          <Text style={styles.warningText}>
            Este aplicativo fornece orientações básicas. Em emergências reais, 
            sempre procure ajuda médica profissional ligando para 192.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    paddingTop: 60,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  backButton: {
    marginRight: 15,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  content: {
    flex: 1,
    padding: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#333',
  },
  stepCard: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 15,
    padding: 15,
    backgroundColor: '#f8f8f8',
    borderRadius: 8,
  },
  stepNumber: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#f4511e',
    color: 'white',
    textAlign: 'center',
    lineHeight: 30,
    fontWeight: 'bold',
    marginRight: 10,
  },
  stepText: {
    flex: 1,
    fontSize: 16,
    lineHeight: 22,
    color: '#333',
  },
  warning: {
    backgroundColor: '#FFF3CD',
    padding: 15,
    borderRadius: 8,
    borderLeftWidth: 4,
    borderLeftColor: '#FFA000',
    marginTop: 20,
  },
  warningTitle: {
    color: '#856404',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  warningText: {
    color: '#856404',
    fontSize: 14,
    lineHeight: 20,
  },
});