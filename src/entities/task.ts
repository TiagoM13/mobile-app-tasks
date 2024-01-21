export enum StatusTask {
  PENDING = 'pending',
  COMPLETED = 'completed',
}

export interface ITask {
  id?: string
  title?: string
  status?: StatusTask
  created_at?: string
  updated_at?: string | null
}
