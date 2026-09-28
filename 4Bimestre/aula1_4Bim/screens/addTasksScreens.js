import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, KeyboardAvoidingView, Platform } from 'react-native';

export default function AddTaskScreen({ navigation }) {
  const [title, setTitle] = useState('');
  const [subject, setSubject] = useState('');
  function saveTask() {
    if (!title.trim() || !subject.trim()) { Alert.alert('Campos obrigatórios', 'Preencha o nome da atividade e a matéria.'); return; }
    navigation.navigate('Minhas tarefas', { newTask: { title: title.trim(), subject: subject.trim() } });
  }
  return <KeyboardAvoidingView style={s.page} behavior={Platform.OS==='ios'?'padding':undefined}>
    <View style={s.form}><Text style={s.heading}>Nova atividade</Text><Text style={s.description}>Adicione os detalhes para manter sua rotina organizada.</Text>
      <Text style={s.label}>Nome da atividade</Text><TextInput value={title} onChangeText={setTitle} placeholder="Ex.: Estudar funções em JavaScript" placeholderTextColor="#A0A6B5" style={s.input} />
      <Text style={s.label}>Matéria ou categoria</Text><TextInput value={subject} onChangeText={setSubject} placeholder="Ex.: Programação" placeholderTextColor="#A0A6B5" style={s.input} />
      <TouchableOpacity style={s.button} onPress={saveTask}><Text style={s.buttonText}>Salvar atividade  →</Text></TouchableOpacity>
      <Text style={s.helper}>Dica: toque em uma tarefa na lista para marcar como concluída.</Text>
    </View>
  </KeyboardAvoidingView>;
}
const s=StyleSheet.create({page:{flex:1,backgroundColor:'#F4F6FB'},form:{backgroundColor:'#fff',margin:20,padding:22,borderRadius:22,borderWidth:1,borderColor:'#EAECF2'},heading:{fontSize:24,fontWeight:'900',color:'#18233D'},description:{fontSize:14,color:'#7D8494',lineHeight:21,marginTop:8,marginBottom:28},label:{fontSize:13,fontWeight:'800',color:'#303B55',marginBottom:9},input:{height:52,borderWidth:1,borderColor:'#E1E5EE',borderRadius:12,paddingHorizontal:14,fontSize:14,color:'#18233D',marginBottom:20,backgroundColor:'#FAFBFD'},button:{backgroundColor:'#5969D9',padding:16,borderRadius:13,alignItems:'center',marginTop:4},buttonText:{color:'#fff',fontSize:15,fontWeight:'800'},helper:{fontSize:12,color:'#9299A9',lineHeight:18,marginTop:18,textAlign:'center'}});
