const Columns = ({ headers }) => {
  return (
    <tr>
      {headers?.map((item, index) => (
        <th key={index} scope="col" className={`px-4 py-3 text-${item.color}`}>
          {item.text}
        </th>
      ))}
    </tr>
  );
};

export default Columns;
