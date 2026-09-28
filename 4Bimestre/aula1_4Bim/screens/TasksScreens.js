import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

const initialTasks = [
  { id: '1', title: 'Revisar conteúdo de matemática', subject: 'Matemática', done: false },
  { id: '2', title: 'Finalizar atividade de programação', subject: 'Desenvolvimento de Sistemas', done: false },
  { id: '3', title: 'Ler capítulo de história', subject: 'História', done: true },
];

export default function TasksScreen({ navigation, route }) {
  const [tasks, setTasks] = useState(initialTasks);
  React.useEffect(() => {
    if (route.params?.newTask) {
      setTasks(current => [{ id: String(Date.now()), title: route.params.newTask.title, subject: route.params.newTask.subject, done: false }, ...current]);
      navigation.setParams({ newTask: null });
    }
  }, [route.params?.newTask]);
  const toggleTask = id => setTasks(current => current.map(task => task.id === id ? { ...task, done: !task.done } : task));
  const completed = tasks.filter(task => task.done).length;
  const renderTask = ({ item }) => (
    <TouchableOpacity style={s.card} onPress={() => toggleTask(item.id)} activeOpacity={0.75}>
      <View style={[s.check, item.done && s.checked]}>{item.done ? <Text style={s.checkMark}>✓</Text> : null}</View>
      <View style={{flex:1}}><Text style={[s.taskTitle,item.done&&s.strike]}>{item.title}</Text><Text style={s.subject}>{item.subject}</Text></View>
      <Text style={s.status}>{item.done ? 'Concluída' : 'Pendente'}</Text>
    </TouchableOpacity>
  );
  return <View style={s.page}>
    <View style={s.summary}><Text style={s.summaryTitle}>Seu progresso</Text><Text style={s.progress}>{completed} de {tasks.length} concluídas</Text><View style={s.track}><View style={[s.fill,{width: tasks.length ? `${completed/tasks.length*100}%` : '0%'}]}/></View></View>
    <FlatList data={tasks} keyExtractor={item=>item.id} renderItem={renderTask} contentContainerStyle={{padding:20,paddingBottom:100}} ListEmptyComponent={<Text style={s.empty}>Nenhuma tarefa por aqui. Adicione sua primeira atividade!</Text>} />
    <TouchableOpacity style={s.fab} onPress={()=>navigation.navigate('Nova tarefa')}><Text style={s.fabText}>＋  Nova tarefa</Text></TouchableOpacity>
  </View>;
}
const s=StyleSheet.create({page:{flex:1,backgroundColor:'#F4F6FB'},summary:{backgroundColor:'#101B35',padding:22,paddingBottom:24},summaryTitle:{fontSize:18,color:'#fff',fontWeight:'800'},progress:{color:'#C5CDE0',fontSize:13,marginTop:8,marginBottom:14},track:{height:8,backgroundColor:'#34415F',borderRadius:8,overflow:'hidden'},fill:{height:8,backgroundColor:'#9AA8FF',borderRadius:8},card:{backgroundColor:'#fff',borderRadius:16,padding:16,marginBottom:12,flexDirection:'row',alignItems:'center',borderWidth:1,borderColor:'#EAECF2'},check:{width:24,height:24,borderRadius:8,borderWidth:2,borderColor:'#B7BED0',marginRight:13,alignItems:'center',justifyContent:'center'},checked:{backgroundColor:'#5969D9',borderColor:'#5969D9'},checkMark:{color:'#fff',fontWeight:'900'},taskTitle:{fontSize:14,fontWeight:'700',color:'#202B45'},strike:{textDecorationLine:'line-through',color:'#9299A9'},subject:{fontSize:12,color:'#858DA0',marginTop:5},status:{fontSize:10,color:'#7D86A0',marginLeft:5},empty:{textAlign:'center',color:'#7D8494',marginTop:30},fab:{position:'absolute',bottom:22,alignSelf:'center',backgroundColor:'#5969D9',paddingVertical:15,paddingHorizontal:26,borderRadius:30,elevation:4},fabText:{color:'#fff',fontSize:15,fontWeight:'800'}});
