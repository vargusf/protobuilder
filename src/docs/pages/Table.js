import React, { Component } from 'react';

import { Table, TableHeadingRow, TableHeadingData, TableRow, TableData, TableDataEmpty} from '../../index';

import protoStyle from '../../styles/global.css';
import style from '../Docs.css';

class PageTable extends Component {
	constructor(props) {
		super(props);

		this.state = {
			active: false
		};
	}

	toggleModal() {
		this.setState({
			active: !this.state.active
		})
	}

	render() {
		return (
			<div>
				<h1 className={style.docHeading1}>Table</h1>

				<h2 className={style.docHeading2}>Regular</h2>
				<div className={style.docbox}>
					<div className={style.docboxContent}>
						<div className={` ${protoStyle.displayFlex} ${protoStyle.colsGutterXsm} `}>
							<Table>
								<TableHeadingRow>
									<TableHeadingData width="33per">heading 1</TableHeadingData>
									<TableHeadingData width="33per">heading 2</TableHeadingData>
									<TableHeadingData width="33per">heading 3</TableHeadingData>
								</TableHeadingRow>
								<TableRow>
									<TableData width="33per">table data row 1 col 1</TableData>
									<TableData width="33per">table data row 1 col 2</TableData>
									<TableData width="33per">table data row 1 col 3</TableData>
								</TableRow>
								<TableRow>
									<TableData width="33per">1</TableData>
									<TableData width="33per">2</TableData>
									<TableData width="33per">3</TableData>
								</TableRow>
								<TableRow>
									<TableData width="33per">Qui proident dolor qui id magna sint excepteur anim nulla eu qui ea. Labore occaecat aute ipsum id incididunt labore est. Eu occaecat nostrud anim officia commodo cupidatat minim eiusmod veniam.</TableData>
									<TableData width="33per">table data row 3 col 2</TableData>
									<TableData width="33per">table data row 3 col 3</TableData>
								</TableRow>
								<TableRow>
									<TableData width="33per">Qui proident dolor qui id magna sint excepteur anim nulla eu qui ea. Labore occaecat aute ipsum id incididunt labore est. Eu occaecat nostrud anim officia commodo cupidatat minim eiusmod veniam.</TableData>
									<TableData width="33per">Qui proident dolor qui id magna sint excepteur anim nulla eu qui ea. Labore occaecat aute ipsum id incididunt labore est. Eu occaecat nostrud anim officia commodo cupidatat minim eiusmod veniam.Qui proident dolor qui id magna sint excepteur anim nulla eu qui ea. Labore occaecat aute ipsum id incididunt labore est. Eu occaecat nostrud anim officia commodo cupidatat minim eiusmod veniam.</TableData>
									<TableData width="33per">Qui proident dolor qui id magna sint excepteur anim nulla eu qui ea. Labore occaecat aute ipsum id incididunt labore est. Eu occaecat nostrud anim officia commodo cupidatat minim eiusmod veniam.Qui proident dolor qui id magna sint excepteur anim nulla eu qui ea. Labore occaecat aute ipsum id incididunt labore est. Eu occaecat nostrud anim officia commodo cupidatat minim eiusmod veniam.Qui proident dolor qui id magna sint excepteur anim nulla eu qui ea. Labore occaecat aute ipsum id incididunt labore est. Eu occaecat nostrud anim officia commodo cupidatat minim eiusmod veniam.</TableData>
								</TableRow>
							</Table>
						</div>
					</div>
					<div className={style.docboxCode}>
					</div>
				</div>

				<h2 className={style.docHeading2}>Links</h2>
				<div className={style.docbox}>
					<div className={style.docboxContent}>
						<div className={` ${protoStyle.displayFlex} ${protoStyle.colsGutterXsm} `}>
							<Table>
								<TableHeadingRow>
									<TableHeadingData width="33per">heading 1</TableHeadingData>
									<TableHeadingData width="33per">heading 2</TableHeadingData>
									<TableHeadingData width="33per">heading 3</TableHeadingData>
								</TableHeadingRow>
								<TableRow to="/">
									<TableData width="33per">table data row 1 col 1</TableData>
									<TableData width="33per">table data row 1 col 2</TableData>
									<TableData width="33per">table data row 1 col 3</TableData>
								</TableRow>
								<TableRow to="/">
									<TableData width="33per">1</TableData>
									<TableData width="33per">2</TableData>
									<TableData width="33per">3</TableData>
								</TableRow>
								<TableRow to="/">
									<TableData width="33per">table data row 1 col 1</TableData>
									<TableData width="33per">table data row 1 col 2</TableData>
									<TableData width="33per">table data row 1 col 3</TableData>
								</TableRow>
							</Table>
						</div>
					</div>
					<div className={style.docboxCode}>
					</div>
				</div>

				<h2 className={style.docHeading2}>Empty</h2>
				<div className={style.docbox}>
					<div className={style.docboxContent}>
						<div className={` ${protoStyle.displayFlex} ${protoStyle.colsGutterXsm} `}>
							<Table>
								<TableHeadingRow>
									<TableHeadingData width="33per">heading 1</TableHeadingData>
									<TableHeadingData width="33per">heading 2</TableHeadingData>
									<TableHeadingData width="33per">heading 3</TableHeadingData>
								</TableHeadingRow>
								<TableRow>
									<TableDataEmpty>There are no rows</TableDataEmpty>
								</TableRow>
							</Table>
						</div>
					</div>
					<div className={style.docboxCode}>
					</div>
				</div>

			</div>
		)
	}
}

export default PageTable;