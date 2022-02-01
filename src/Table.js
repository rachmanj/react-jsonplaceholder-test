import Row from './Row';

const Table = ({ items }) => {
  return (
    <div className="table-container">
      <table>
        <tbody>
          {items.map(item => (
            <Row item={item} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
