function Browser() {
  return (
    <div className="flex flex-col m-10 w-60">
      <h1 className="font-black">Filtrar</h1>
      <ul>
        <li>
          <label className="font-bold">
            <input type="checkbox" id="hombre" value="hombre" name="hombre" />{" "}
            Hombre
          </label>
        </li>
        <li>
          <label className="font-bold">
            <input type="checkbox" id="mujer" value="mujer" name="mujer" />{" "}
            Mujer
          </label>
        </li>
        <li>
          <label className="font-bold">
            <input
              type="checkbox"
              id="accesorios"
              value="accesorios"
              name="accesorios"
            />{" "}
            Accesorios
          </label>
        </li>
      </ul>
    </div>
  );
}

export default Browser;
