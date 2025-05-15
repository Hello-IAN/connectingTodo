export type TTodo = {
	 id: string; // 서버에서 내려오는 id를 string으로 캐스팅
  content: string;
  completed: boolean; // 로컬 상태
  createAt?: string;
  updateAt: string;
}

export type TFilterTodo = 'ALL' | 'COMPLETED' | 'INCOMPLETE'