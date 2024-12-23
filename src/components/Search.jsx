export default function Search({loadData}) {
    return (
        <form onSubmit={loadData}>
            <label htmlFor="location">Location: </label>
            <input type="text" id="location" name="location" autoComplete="off"/>
            <button type="submit">Search</button>
        </form>
    );
}