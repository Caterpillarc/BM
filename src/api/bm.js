export default function (fetch) {
  const { get } = fetch
  return new class {
      baseUrl = base
      login (params) {
        return get(`${this.baseUrl}/login`, params)
      }
  }()
}
