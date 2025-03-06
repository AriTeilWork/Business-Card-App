export default function ShowButton({ children, onSelect, isSelected }) {
    return (
            <button className={isSelected ? 'active' : undefined} onClick={onSelect}>{children}</button>
    );
}
