export default (_, context) => {

    const items = [{ id: 1, name: 'Umer Nasir' }, { id: 2, name: 'Muhammad Ahmed' }];
    return context.json({ items });

}