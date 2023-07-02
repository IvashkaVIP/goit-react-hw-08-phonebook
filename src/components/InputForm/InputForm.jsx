export const InputForm = (text='', inputState={}) => {
    return (
      <>
        <h2>Phonebook</h2>
        <div className="input-wrap">
                <p>Name</p>
                <input type={text} value={inputState}></input>
        </div>
      </>
    );
}