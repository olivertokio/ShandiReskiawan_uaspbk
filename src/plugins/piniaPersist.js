// src/plugins/piniaPersist.js
export function piniaPersistPlugin({ store }) {
  const savedState = localStorage.getItem(store.$id);
  if (savedState) {
    try {
      store.$patch(JSON.parse(savedState));
    } catch (err) {
      console.error('Gagal parsing state dari localStorage:', err);
    }
  }

  store.$subscribe((_, state) => {
    localStorage.setItem(store.$id, JSON.stringify(state));
  });
}
