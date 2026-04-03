function getCurrentUrl() {
  const url = location.href.split('?').shift();
  if (url.match(/\/$/)) return url.replace(/\/$/, '');
  if (url.match(/index\.html$/)) return url.replace(/index\.html$/, '').replace(/\/$/, '');
  return url;
}

const { createApp, reactive, ref } = Vue;

createApp({
  data() {
    return {
      baseApiUrl: getCurrentUrl() + '/api',
      endpoints: [],
      data: {},
      detail: {},
      selected: {},
      loading: {},
      loadingDetail: {},
    };
  },
  created() {
    this.init();
  },
  methods: {
    async init() {
      // Fetch daftar endpoint dari index.json
      const res = await fetch('api/index.json');
      const index = await res.json();
      this.endpoints = index.endpoints;

      // Inisialisasi reactive properties
      this.endpoints.forEach(ep => {
        this.data[ep.table] = [];
        this.detail[ep.table] = null;
        this.selected[ep.table] = '';
        this.loading[ep.table] = false;
        this.loadingDetail[ep.table] = false;
      });

      // Fetch semua list data
      this.endpoints.forEach(ep => this.fetchList(ep));
    },

    async fetchList(ep) {
      this.loading[ep.table] = true;
      try {
        const res = await fetch(ep.list);
        const json = await res.json();
        this.data[ep.table] = json;
      } catch (err) {
        console.error(`Error fetching ${ep.table}:`, err);
      }
      this.loading[ep.table] = false;
    },

    async fetchDetail(ep) {
      const id = this.selected[ep.table];
      if (!id && id !== 0) {
        this.detail[ep.table] = null;
        return;
      }
      this.loadingDetail[ep.table] = true;
      try {
        const url = ep.detail.replace('{id}', id);
        const res = await fetch(url);
        const json = await res.json();
        this.detail[ep.table] = json;
      } catch (err) {
        console.error(`Error fetching detail ${ep.table}/${id}:`, err);
      }
      this.loadingDetail[ep.table] = false;
    },

    fetchCode(ep) {
      const url = `${this.baseApiUrl}/${ep.table}.json`;
      return [
        `fetch('<a href="${url}" target="_blank">${url}</a>')`,
        '  .then(response => response.json())',
        `  .then(data => console.log(data));`
      ].join('\n');
    },

    responseJson(table) {
      return JSON.stringify(this.data[table] || [], null, 2);
    },

    detailJson(table) {
      return JSON.stringify(this.detail[table] || {}, null, 2);
    },

    detailUrl(ep) {
      const id = this.selected[ep.table];
      return `${this.baseApiUrl}/${ep.table}/${id}.json`;
    },
  }
}).mount('#app');
