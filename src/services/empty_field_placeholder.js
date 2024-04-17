export function emptyFieldPlaceholder(data, fields) {
  // Проходим по каждому объекту в массиве
  data.forEach((item, index) => {
    fields.forEach((field) => {
      if (item[field] !== undefined) return; // Если свойство уже есть, пропускаем его

      let found = false;

      // Если это не первый элемент, начинаем поиск с предыдущих элементов
      if (index !== 0) {
        for (let j = index - 1; j >= 0; j--) {
          if (data[j][field] !== undefined) {
            item[field] = data[j][field];
            found = true;
            break;
          }
        }
      }

      // Если это первый элемент или свойство не найдено в предыдущих, ищем в последующих элементах
      if (index === 0 || !found) {
        for (let k = index + 1; k < data.length; k++) {
          if (data[k][field] !== undefined) {
            item[field] = data[k][field];
            found = true;
            break;
          }
        }
      }
    });
  });

  return data;
}
