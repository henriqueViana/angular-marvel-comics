export interface ComicsDTO {
  code: number,
  status: string,
  copyright: string,
  data: {
    limit: number,
    count: number,
    results: [
      {
        id: number,
        resourceURI: string
      }
    ]
  }
}