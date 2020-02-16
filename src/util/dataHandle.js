export function dataHandle(data) {
  const newData = [];
  for (let i = 0; i < data.length; ++i) {
    let { id, name, introduction, address, tel, ticket, url, images } = data[i];
    newData.push({
      id,
      name,
      introduction,
      address,
      tel,
      ticket,
      url,
      images
    });
  }
  return newData;
}

export function findData(id, data) {
  let oneData = data.find(item => item.id == id);
  return oneData;
}
