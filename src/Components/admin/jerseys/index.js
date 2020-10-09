import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import AdminLayout from "../../../Hoc/adminLayout";


import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import CircularProgress from "@material-ui/core/CircularProgress";

import {firebaseJerseys} from "../../../firebase";
import {firebaseLooper,reverseArray } from "../../ui/misc";

class AdminJerseys extends Component {

    state = {
       isLoading: true,
        jerseys: []
    };

    componentDidMount() {
        firebaseJerseys.once('value').then((snapshot) => {
            const jerseys = firebaseLooper(snapshot);

            this.setState({
                isLoading: false,
                jerseys: reverseArray(jerseys)
            })
        })
    }

    render() {
        return (
            <AdminLayout>
                <div>
                    <Paper>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Title</TableCell>
                                    <TableCell>Description</TableCell>
                                    <TableCell>Price</TableCell>
                                    <TableCell>Discount</TableCell>
                                    <TableCell>Gender</TableCell>
                                    <TableCell>Age limit</TableCell>
                                    <TableCell>Type</TableCell>
                                    <TableCell>Brand</TableCell>
                                </TableRow>
                            </TableHead>

                            <TableBody style={{background: 'lightslategray'}}>
                                { this.state.jerseys ?
                                    this.state.jerseys.map((jersey,i) => (
                                        <TableRow key={i}>
                                            <TableCell>
                                                <Link to={`admin_jerseys/add_jerseys/${jersey.id}`}>
                                                    {jersey.title}
                                                </Link>
                                            </TableCell>
                                            <TableCell>
                                                <Link to={`admin_jerseys/add_jerseys/${jersey.id}`}>
                                                    {jersey.description}
                                                </Link>
                                            </TableCell>
                                            <TableCell>
                                                    {jersey.price}
                                            </TableCell>
                                            <TableCell>
                                                    {jersey.discount}
                                            </TableCell>
                                            <TableCell>
                                                    {jersey.gender}
                                            </TableCell>
                                            <TableCell>
                                                    {jersey.ageLimit}
                                            </TableCell>
                                            <TableCell>
                                                     {jersey.type}
                                            </TableCell>
                                            <TableCell>
                                                     {jersey.brand}
                                            </TableCell>
                                        </TableRow>
                                    ))
                                    : null
                                }
                            </TableBody>
                        </Table>
                    </Paper>
                    <div className="admin_progress">
                        {this.state.isLoading ?
                            <CircularProgress thickness={7} style={{color: '#98c5e9'}}/>
                            : null
                        }
                    </div>
                </div>
            </AdminLayout>
        );
    }
}

export default AdminJerseys;