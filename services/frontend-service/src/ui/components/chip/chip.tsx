/*This file is part of kuberpult.

Kuberpult is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

Kuberpult is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with kuberpult.  If not, see <http://www.gnu.org/licenses/>.

Copyright 2021 freiheit.com*/
import classNames from 'classnames';

export const Chip = (props: { className?: string; label?: string }) => {
    const { className, label } = props;

    return (
        <span className={classNames('mdc-evolution-chip', className)} role="row">
            <span className="mdc-evolution-chip__cell mdc-evolution-chip__cell--primary" role="gridcell">
                <button className={'mdc-evolution-chip__action mdc-evolution-chip__action--primary'} type="button">
                    <span className="mdc-evolution-chip__ripple mdc-evolution-chip__ripple--primary" />
                    <span className="mdc-evolution-chip__text-label">{label}</span>
                </button>
            </span>
        </span>
    );
};