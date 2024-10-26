import { Router } from 'express';

import Paths from '../common/Paths';
import UserRoutes from './UserRoutes';
import ExampleRoutes from './ExampleRoutes';

// **** Variables **** //

const apiRouter = Router();
const exampleRouter = Router();

// ** Add UserRouter ** //

// Init router
const userRouter = Router();

// Get all users
userRouter.get(Paths.Users.Get, UserRoutes.getAll);
userRouter.post(Paths.Users.Add, UserRoutes.add);
userRouter.put(Paths.Users.Update, UserRoutes.update);
userRouter.delete(Paths.Users.Delete, UserRoutes.delete);

exampleRouter.get(Paths.Example.Get, ExampleRoutes.getAll);
exampleRouter.post(Paths.Example.Add, ExampleRoutes.add);
exampleRouter.put(Paths.Example.Update, ExampleRoutes.update);
exampleRouter.delete(Paths.Example.Delete, ExampleRoutes.delete);

// Add UserRouter
apiRouter.use(Paths.Users.Base, userRouter);

apiRouter.use(Paths.Example.Base, exampleRouter);

// **** Export default **** //

export default apiRouter;
