export interface ITask {
  id?: string
  title?: string
  status?: 'pending' | 'completed'
  created_at?: string
  updated_at?: string | null
}
