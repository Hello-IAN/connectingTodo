import { TTodo } from "../types/todo";

const API_BASE = `http://3.35.194.197:9000/todo/`;

export const GETTodoAPI = async () => {

  const res = await fetch(`http://3.35.194.197:9000/todo/`);
  if (!res.ok) throw new Error('서버 에러');
	 const data = await res.json();
  return data.map((item: any) => ({
    id: String(item.id),
    content: item.content,
    completed: false, // 서버 응답에는 없음 → 기본값 false
    createAt: item.create_at,
    updateAt: item.update_at,
  }));
};

export const POSTTodoAPI = async (content:string) => {
  const res = await fetch(API_BASE, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({content:content}),
  }); if (!res.ok) throw new Error('Create failed');

  const item = await res.json();
  return {
    id: String(item.id),
    content: item.content,
    completed: false,
    createAt: item.create_at,
    updateAt: item.update_at,
  };
};

export const PATCHTodoAPI = async (todo:TTodo) => {
	const {id, content} = todo
	const api = `${API_BASE}${id}/`

  const res = await fetch(api, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({content:content}),
  });
  if (!res.ok) throw new Error('생성 실패');
  return await res.json();
};


export const DELETETodoAPI = async (id: string) => {
	const api = `${API_BASE}${id}/`
  const res = await fetch(api, { method: 'DELETE' });
	return await res.json();
};