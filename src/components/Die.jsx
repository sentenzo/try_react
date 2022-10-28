const Die = (props) => <div
    className={props.locked ? "die locked" : "die"}
    onClick={props.on_die_clicked}
>
    {props.value}
</div>

export default Die;