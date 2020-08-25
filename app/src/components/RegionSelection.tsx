import React from 'react';
import { useLocalStorage } from '../hooks/storage-hook';
import Button from '@material-ui/core/Button';
import { useHistory } from "react-router-dom";

import { getGameRegions } from '../common/data';

export default function RegionSelection() {
    const regions = getGameRegions();
    const history = useHistory();
    const [region, setRegion] = useLocalStorage('selectedRegion', '');

    const regionSelected = (regionId: string) => {
        setRegion(regionId);
        history.push("/gamemode");
    }

    return (
        <div>
            {
                regions.map((region: { name: string; id: string; }) => (
                    <Button
                        onClick={() => regionSelected(region.id)}
                        variant="contained">
                        {region.name}
                    </Button>
                ))
            }
        </div>
    );
}
