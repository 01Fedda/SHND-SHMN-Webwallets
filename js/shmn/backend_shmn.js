// Back-end API

var backend =
{	
	host:      'shmnexplorer.xyz',
	home_page: 'https://shmnexplorer.xyz/',
	adr_page:  'https://shmnexplorer.xyz/address/',
	tx_page:   'https://shmnexplorer.xyz/tx/'
};//___________________________________________________________________________

function backend_balance_cb(res)
{
	console.log(res); this.balance_cb(parseFloat(res) / 1e8);
}//____________________________________________________________________________

/*function backend_unspent_cb(data)
{
	var utxo = false; console.log(data);

	try{ data = JSON.parse(data); } catch(e){ data = {}; }

	if(typeof data.unspent_outputs != 'undefined')
	{
		var u = data.unspent_outputs; utxo = [];
	                               
		for(var i = 0; i < u.length; i++)
		{
			//utxo.push({txid: u[i].tx_hash_big_endian, n: u[i].tx_output_n, amount: u[i].value, script: u[i].script});
			utxo.push({txid: u[i].tx_hash, n: u[i].tx_output_n, amount: u[i].value, script: u[i].script});
			//utxo.push({txid: u[i].txid, n: u[i].vout, amount: u[i].amount * 1e8, script: u[i].scriptPubKey});
		}
	}

	backend.unspent_cb(utxo);
}*///____________________________________________________________________________

function backend_unspent_cb(data)
{
	var utxo = false; console.log(data);

	try{ data = JSON.parse(data); } catch(e){ data = {}; }

	if(data.length)
	{
		utxo = [];
	                               
		for(var i = 0; i < data.length; i++)
		{
			var u = data[i];

			//utxo.push({txid: u.txid, vout: u.vout, amount: u.amount, script: u.scriptPubKey});
			utxo.push({txid: u.txid, vout: u.vout, amount: u.amount * 1e8, script: u.scriptPubKey});
			//utxo.push({txid: u.txid, vout: u.vout, amount: u.satoshis, script: u.scriptPubKey});
			//utxo.push({txid: u.txid, vout: u.vout, amount: u.satoshis * 1e8, script: u.scriptPubKey});
		}
	}

	backend.unspent_cb(utxo);
}//____________________________________________________________________________

function backend_send_cb(res)
{
	console.log(res);

	backend.send_cb(res.indexOf('Transaction Submitted') == 0 ? '' : res);
}//____________________________________________________________________________

/*function backend_send_cb(data)
{
	console.log(data);

	var m = /^[\s\"]*[0-9a-f]{64}[\s\"]*$/.test(data); // check if this is txid

	backend.send_cb(m ? '' : data);
};*///____________________________________________________________________________

backend.get_balance = function(adr, cb)
{
	this.balance_cb = cb;
	
	js.ajax('GET', 'https://shmnexplorer.xyz/ext/getbalance/' + adr, 'cors=true', backend_balance_cb);
};//___________________________________________________________________________

backend.get_utxo = function(adr, cb)
{
	this.unspent_cb = cb;
	
	js.ajax('GET', 'https://shmnexplorer.xyz/ext/getutxos/' + adr, 'cors=true', backend_unspent_cb);
};//___________________________________________________________________________

backend.send = function(tx, cb)
{
	this.send_cb = cb;

	js.ajax('POST', 'https://shmnexplorer.xyz/ext/sendrawtransaction/' + tx, '', backend_send_cb);
};//___________________________________________________________________________
