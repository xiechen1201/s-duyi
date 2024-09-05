import { ref, watchEffect, toValue } from 'vue';

export function useFetch(url) {
  const data = ref(null);
  const error = ref(null);

  const fetchData = () => {
    data.value = null;
    error.value = null;

    fetch(toValue(url))
      .then((response) => response.text())
      .then((response) => (data.value = response))
      /* .catch((err) => {
        console.log(err.name)
        console.log(err.message)
        console.log(err.stack)
        error.value = err
      }); */
  };

  watchEffect(() => {
    fetchData();
  });

  return { data, error };
}
