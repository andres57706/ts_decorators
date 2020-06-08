
export default (permissions: string[]) => {
    return (req: any, res: Express.Response, next: any) => {
        console.log(`auth middleware`);
        let { permissions: userPermissions } = req.query;
        if(typeof(userPermissions) === 'string') {
            userPermissions = [userPermissions];
        }
        const result = userPermissions.every((up: string) => permissions.some(p => p === up));
        if (result === false) {
            console.log(`status 403 :o`);
            next({
                status: 403,
                msg: 'insufficient permissions'
            });
        }
        next();
    }
}