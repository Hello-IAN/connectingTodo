import { all, call, Effect, put, takeEvery } from 'redux-saga/effects';
import { addTodo, deleteTodo, setTodos, toggleTodo, updateSuccessTodo, updateTodo } from './todoSlice';
import { DELETETodoAPI, GETTodoAPI, PATCHTodoAPI, POSTTodoAPI } from '../api/todoAPI';
import { TTodo } from '../types/todo';
import { PayloadAction } from '@reduxjs/toolkit';
import { loadCompletedMap, saveCompletedMap } from '../utils/mergeTodolistAtLocalStorage';

function* fetchTodosSaga():Generator<Effect, void,  [TTodo[], Record<string, boolean>]> {
 
  try {
      const [serverTodos, completedMap] = yield all([
      call(GETTodoAPI),
      call(loadCompletedMap),
    ]);
		const mergedTodos = serverTodos.map((todo) => ({
      ...todo,
      completed: completedMap[todo.id] ?? false,
    }));

    const sorted = mergedTodos.sort(
      (a, b) => new Date(b.updateAt).getTime() - new Date(a.updateAt).getTime()
    );
    yield put(setTodos(sorted));
  } catch (e) {
    console.error('서버에서 TODO 불러오기 실패:', e);
  }
}

function* addTodoSaga(action: PayloadAction<string>) {
	
	try {
		
		const response:TTodo = yield call(POSTTodoAPI, action.payload);
		yield put(addTodo(response));
	
	} catch (e) {
		console.error('저장 실패')
	}
}

function* toggleTodoSaga(action: PayloadAction<TTodo>):Generator<Effect, void, Record<string, boolean>> {
  try {
    const map:Record<string, boolean>  = yield call(loadCompletedMap);
    const id = action.payload.id;
    map[id] = !action.payload.completed;
    yield call(saveCompletedMap, map);
    yield put(toggleTodo(id));
  } catch (e) {
    console.error('수정 실패:', e);
  }
}

function* updateTodoSaga(action: PayloadAction<TTodo>):Generator<Effect, void, TTodo> {
  const { content } = action.payload;
  if (!content.trim()) {
    console.warn('빈 내용으로 수정할 수 없습니다.');
    return; // 여기서 조기 종료
  } else if (action.payload.completed) {
    console.warn('완료된 TODO는 수정할 수 없습니다.');
    return;
  }
  try {
    const response = yield call(PATCHTodoAPI, action.payload);
    yield put(updateSuccessTodo(response));
  } catch (e) {
    console.error('수정 실패:', e);
  }
}

function* deleteTodoSaga(action: PayloadAction<string>):Generator<Effect, void, TTodo> {
  try {
		yield call(DELETETodoAPI, action.payload);
		yield put(deleteTodo(action.payload));
	} catch (e) {
		;
	}
}

export default function* rootSaga() {
	 
  yield all([
		takeEvery('todos/fetchTodos', fetchTodosSaga),
    takeEvery('todos/requestAddTodo', addTodoSaga),
    takeEvery('todos/requestToggleTodo', toggleTodoSaga),
    takeEvery('todos/updateTodo', updateTodoSaga),
    takeEvery('todos/deleteTodo', deleteTodoSaga),
  ]);
}
