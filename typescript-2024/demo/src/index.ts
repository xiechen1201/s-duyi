type C = { id: 1; name: "jack"; sex: "男" } extends { id: 1 } ? 1 : 2; // 1

type D = ((arg: { id: 1 }) => any) extends (arg: {
    id: 1;
    name: "jack";
    sex: "男";
}) => any
    ? 1
    : 2; //1
