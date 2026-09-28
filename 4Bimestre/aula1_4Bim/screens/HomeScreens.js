import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <ScrollView style={s.page} contentContainerStyle={s.content}>
      <View style={s.hero}>
        <Text style={s.brand}>✦ StudyFlow</Text>
        <Text style={s.greeting}>Olá, estudante! 👋</Text>
        <Text style={s.subtitle}>Seu espaço para organizar os estudos e alcançar seus objetivos.</Text>
        <View style={s.statsRow}>
          <View><Text style={s.statNumber}>Foco</Text><Text style={s.statLabel}>um passo de cada vez</Text></View>
          <Text style={s.sparkle}>✧</Text>
        </View>
      </View>
      <Text style={s.sectionTitle}>O que vamos fazer hoje?</Text>
      <TouchableOpacity style={s.primary} onPress={() => navigation.navigate('Minhas tarefas')}>
        <View><Text style={s.primaryTitle}>Minhas tarefas</Text><Text style={s.primarySub}>Visualize e acompanhe suas atividades</Text></View><Text style={s.arrow}>→</Text>
      </TouchableOpacity>
      <TouchableOpacity style={s.secondary} onPress={() => navigation.navigate('Nova tarefa')}>
        <Text style={s.plus}>＋</Text><View style={{flex:1}}><Text style={s.secondaryTitle}>Adicionar atividade</Text><Text style={s.secondarySub}>Registre uma nova tarefa ou trabalho</Text></View><Text style={s.arrowDark}>→</Text>
      </TouchableOpacity>
      <View style={s.tip}><Text style={s.tipLabel}>DICA DO DIA</Text><Text style={s.tipText}>Divida atividades grandes em pequenas etapas. Assim, fica mais fácil começar e manter o ritmo.</Text></View>
      <Text style={s.footer}>STUDYFLOW  •  ORGANIZE. APRENDA. EVOLUA.</Text>
    </ScrollView>
  );
}
const s=StyleSheet.create({page:{flex:1,backgroundColor:'#F4F6FB'},content:{padding:22,paddingBottom:34},hero:{backgroundColor:'#101B35',borderRadius:26,padding:24,paddingTop:28,marginBottom:28},brand:{color:'#A9B8FF',fontSize:15,fontWeight:'800',letterSpacing:1,marginBottom:30},greeting:{fontSize:29,fontWeight:'800',color:'#fff',marginBottom:10},subtitle:{fontSize:15,lineHeight:23,color:'#C5CDE0'},statsRow:{marginTop:26,paddingTop:18,borderTopWidth:1,borderTopColor:'#34415F',flexDirection:'row',justifyContent:'space-between',alignItems:'center'},statNumber:{color:'#fff',fontWeight:'700',fontSize:17},statLabel:{color:'#AEB9D1',fontSize:12,marginTop:3},sparkle:{fontSize:38,color:'#A9B8FF'},sectionTitle:{fontSize:20,fontWeight:'800',color:'#18233D',marginBottom:16},primary:{backgroundColor:'#5969D9',padding:20,borderRadius:20,flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginBottom:13},primaryTitle:{fontSize:18,fontWeight:'800',color:'#fff'},primarySub:{fontSize:13,color:'#E1E5FF',marginTop:6},arrow:{fontSize:28,color:'#fff'},secondary:{backgroundColor:'#fff',padding:19,borderRadius:20,flexDirection:'row',alignItems:'center',marginBottom:22,borderWidth:1,borderColor:'#E7EAF2'},plus:{fontSize:28,color:'#5969D9',marginRight:14},secondaryTitle:{fontSize:16,fontWeight:'800',color:'#18233D'},secondarySub:{fontSize:13,color:'#7C8498',marginTop:5},arrowDark:{fontSize:24,color:'#5969D9'},tip:{backgroundColor:'#E9EDFF',borderRadius:18,padding:20},tipLabel:{color:'#5969D9',fontSize:11,fontWeight:'900',letterSpacing:1},tipText:{color:'#303D67',fontSize:14,lineHeight:21,marginTop:8},footer:{textAlign:'center',fontSize:10,color:'#A0A6B5',letterSpacing:1.2,marginTop:28}});
