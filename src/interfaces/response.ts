export interface CustomResponse<T> {
  status: string
  message: string | null
  data: {
    count: number
    topics?: T
    articles?: T
  }
}
