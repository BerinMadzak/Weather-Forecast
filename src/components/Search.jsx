export default function Search({loadData}) {
    return (
        <form onSubmit={loadData}>
            <label htmlFor="location">Location: </label>
            <input type="text" id="location" name="location"/>
            <button type="submit">Search</button>
        </form>
    );
}