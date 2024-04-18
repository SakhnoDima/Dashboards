export const emptyFieldPlaceholder = (data, fields) => {
  data.forEach((item, index) => {
    fields.forEach((field) => {
      if (item[field] !== undefined) return;

      let found = false;

      if (index !== 0) {
        for (let j = index - 1; j >= 0; j--) {
          if (data[j][field] !== undefined) {
            item[field] = data[j][field];
            found = true;
            break;
          }
        }
      }

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
};
