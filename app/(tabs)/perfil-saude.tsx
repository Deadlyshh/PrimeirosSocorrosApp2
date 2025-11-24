import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Picker } from '@react-native-picker/picker'; 
import { TouchableOpacity } from 'react-native-gesture-handler';


import AsyncStorage from '@react-native-async-storage/async-storage';

type PerfilSaudeData = {
  tipoSanguineo: string;
  condicoes: string; 
  alergias?: string;
  medicacoes?: string;
  contatoEmergencia?: string;
};

const STORAGE_KEY = '@perfil_saude';

export default function PerfilSaudeScreen() {
  const [tipoSanguineo, setTipoSanguineo] = useState<string>('O+');
  const [condicoes, setCondicoes] = useState<string>('');
  const [alergias, setAlergias] = useState<string>('');
  const [medicacoes, setMedicacoes] = useState<string>('');
  const [contatoEmergencia, setContatoEmergencia] = useState<string>('');

  React.useEffect(() => {
    (async () => {
      try {
        const raw = await AsyncStorage.getItem(STORAGE_KEY);
        if (raw) {
          const data: PerfilSaudeData = JSON.parse(raw);
          setTipoSanguineo(data.tipoSanguineo ?? 'O+');
          setCondicoes(data.condicoes ?? '');
          setAlergias(data.alergias ?? '');
          setMedicacoes(data.medicacoes ?? '');
          setContatoEmergencia(data.contatoEmergencia ?? '');
        }
      } catch {}
    })();
  }, []);

  const salvar = async () => {
    const data: PerfilSaudeData = {
      tipoSanguineo,
      condicoes,
      alergias,
      medicacoes,
      contatoEmergencia,
    };
    try {
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(data));
      Alert.alert('Sucesso', 'Informações salvas com sucesso.');
    } catch (e) {
      Alert.alert('Erro', 'Não foi possível salvar os dados.');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>Perfil de Saúde</Text>

        <Text style={styles.label}>Tipo sanguíneo</Text>
        <View style={styles.pickerWrap}>
          <Picker
            selectedValue={tipoSanguineo}
            onValueChange={(v) => setTipoSanguineo(String(v))}
          >
            {['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'].map((t) => (
              <Picker.Item key={t} label={t} value={t} />
            ))}
          </Picker>
        </View>

        <Text style={styles.label}>Problemas de saúde (condições)</Text>
        <TextInput
          style={styles.inputMultiline}
          placeholder="Ex.: asma; hipertensão; diabetes…"
          value={condicoes}
          onChangeText={setCondicoes}
          multiline
        />

        <Text style={styles.label}>Alergias</Text>
        <TextInput
          style={styles.input}
          placeholder="Ex.: penicilina, frutos do mar…"
          value={alergias}
          onChangeText={setAlergias}
        />

        <Text style={styles.label}>Medicações em uso</Text>
        <TextInput
          style={styles.input}
          placeholder="Ex.: metformina 500 mg…"
          value={medicacoes}
          onChangeText={setMedicacoes}
        />

        <Text style={styles.label}>Contato de emergência</Text>
        <TextInput
          style={styles.input}
          placeholder="Nome e telefone de um contato"
          value={contatoEmergencia}
          onChangeText={setContatoEmergencia}
        />

        <TouchableOpacity style={styles.btn} onPress={salvar}>
          <Text style={styles.btnText}>Salvar</Text>
        </TouchableOpacity>

        <View style={{ height: 24 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  content: { padding: 16 },
  title: { fontSize: 22, fontWeight: '700', marginBottom: 16 },
  label: { fontSize: 14, fontWeight: '600', marginTop: 12, marginBottom: 6 },
  pickerWrap: {
    borderWidth: 1, borderColor: '#e1e4e8', borderRadius: 10, overflow: 'hidden',
  },
  input: {
    borderWidth: 1, borderColor: '#e1e4e8', borderRadius: 10,
    paddingHorizontal: 12, paddingVertical: 10, fontSize: 14, backgroundColor: '#fafafa',
  },
  inputMultiline: {
    borderWidth: 1, borderColor: '#e1e4e8', borderRadius: 10,
    paddingHorizontal: 12, paddingVertical: 10, fontSize: 14,
    backgroundColor: '#fafafa', minHeight: 80, textAlignVertical: 'top',
  },
  btn: {
    marginTop: 18, backgroundColor: '#0ea5e9', paddingVertical: 12,
    borderRadius: 10, alignItems: 'center',
  },
  btnText: { color: '#fff', fontWeight: '700', fontSize: 16 },
});