import {
  DataPersonal as DataPersonalType,
  DataPersonalErrorMessage,
} from "../../entity/DataPersonal";

interface DataPersonalProps {
  handleSubmit: React.FormEventHandler;
  fields: DataPersonalType;
  errorMessage: DataPersonalErrorMessage;
  handleChange: React.FormEventHandler;
}

const defaultProps: DataPersonalProps = {
  handleSubmit: () => {},
  fields: {
    namaLengkap: "",
  },
  errorMessage: {
    namaLengkap: "",
  },
  handleChange: () => {},
};

export const DataPersonal = ({
  handleSubmit,
  fields,
  errorMessage,
  handleChange,
}: DataPersonalProps) => {
  return (
    <>
      <form role="form" onSubmit={handleSubmit}>
        <label htmlFor="namalengkap">Nama Lengkap</label>
        <input
          type="text"
          id="namalengkap"
          name="nama_lengkap"
          value={fields.namaLengkap}
          onChange={handleChange}
        />
        <br />
        {errorMessage.namaLengkap.length > 0 && (
          <span>{errorMessage.namaLengkap}</span>
        )}

        <input type="submit" name="submit" value="next" />
      </form>
    </>
  );
};

DataPersonal.defaultProps = defaultProps;
