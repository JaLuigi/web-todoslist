import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const TaskItem = ({ task, toggleTask }) => {
  return (
    <TouchableOpacity onPress={() => toggleTask(task.id)}>
      <Text style={[styles.taskText, task.done && styles.doneText]}>
        {task.text}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  taskText: {
    fontSize: 18,
    padding: 15,
  },
  doneText: {
    textDecorationLine: 'line-through',
    color: 'gray',
  },
});

export default TaskItem;
